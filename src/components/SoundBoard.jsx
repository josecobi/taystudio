import React, { useRef, useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaStop, FaRedo, FaVolumeUp } from 'react-icons/fa';




const sounds = [
  { label: 'Bliss', src: '/sounds/Bliss.mp3' },
  { label: 'Powerfull Trap', src: '/sounds/Powerful-Trap.mp3' },
  { label: 'Feel Good', src: '/sounds/Feel-Good.mp3' },
  { label: 'Feel', src: '/sounds/Feel-Good.mp3' },
];

const SoundBoard = () => {
    const soundRefs = useRef({});
    const [looping, setLooping] = useState({});
    const [volumes, setVolumes] = useState(
      Object.fromEntries(sounds.map(({ src }) => [src, 1.0]))
    );
    const [progress, setProgress] = useState(
      Object.fromEntries(sounds.map(({ src }) => [src, 0]))
    );
    const [playing, setPlaying] = useState({});
    const [paused, setPaused] = useState({});
    const [showVolume, setShowVolume] = useState(false)

    const animationRef = useRef(null);
  
    // Start animation loop to update progress
    useEffect(() => {
      const updateProgress = () => {
        const newProgress = {};
        for (const { src } of sounds) {
          const sound = soundRefs.current[src];
          if (sound && sound.playing() || sound && paused) {
            newProgress[src] = (sound.seek() || 0) / sound.duration();
          } else {
            newProgress[src] = progress[src] || 0;
          }
        }
        setProgress(prev => ({ ...prev, ...newProgress }));
        animationRef.current = requestAnimationFrame(updateProgress);
      };
  
      animationRef.current = requestAnimationFrame(updateProgress);
      return () => cancelAnimationFrame(animationRef.current);
    }, []);
  
    const getSound = (src) => {
      if (!soundRefs.current[src]) {
        soundRefs.current[src] = new Howl({
          src: [src],
          volume: volumes[src],
          loop: looping[src] || false,
          html5: true, // improves large file streaming
        });
      }
  
      const sound = soundRefs.current[src];
      sound.volume(volumes[src]);
      sound.loop(looping[src] || false);
      return sound;
    };
  
    const togglePlayPause = (src) => {
        const sound = getSound(src);
        if (sound.playing()) {
          sound.pause();
          setPaused((prev) => ({ ...prev, [src]: true })); 

          setPlaying((prev) => ({ ...prev, [src]: false })); 
        } else {
          sound.play();
          setPlaying((prev) => ({ ...prev, [src]: true })); 
          setPaused((prev) => ({ ...prev, [src]: false })); 

        }
    };
  
    const stopSound = (src) => {
      const sound = getSound(src);
      sound.stop();
      setPlaying((prev) => ({ ...prev, [src]: false }));
      setProgress(prev => ({ ...prev, [src]: 0 }));
    };
  
    const toggleLoop = (src) => {
      setLooping((prev) => {
        const newLoop = !prev[src];
        if (soundRefs.current[src]) {
          soundRefs.current[src].loop(newLoop);
        }
        return { ...prev, [src]: newLoop };
      });
    };
  
    const setVolume = (src, value) => {
      setVolumes((prev) => {
        const updated = { ...prev, [src]: value };
        if (soundRefs.current[src]) {
          soundRefs.current[src].volume(value);
        }
        return updated;
      });
    };   
 
    const seekSound = (src, value) => {
      const sound = getSound(src);
      const duration = sound.duration();
      sound.seek(value * duration);
      setProgress(prev => ({ ...prev, [src]: value }));
    };
    const toggleVolumeVisibility = (src) => {
        setShowVolume(prev => ({ ...prev, [src]: !prev[src] }));
      };

    return (
      <div className="p-4 space-y-6">
        <h1 className="text-richOrange text-2xl font-bold mb-4">Soundboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sounds.map(({ label, src }) => (
          <div
            key={label}
            className="bg-deepTeal rounded-lg p-4 shadow-md"
          >
            <div className="flex gap-4">
            {/* Left Column (Sound Controls) */}
            <div className="flex-1">
              <h2 className="text-white text-lg">{label}</h2>
              <div className="flex flex-wrap gap-2">
              <button
                onClick={() => togglePlayPause(src)}
                className="w-10 h-10 flex items-center justify-center ring-1 ring-slate-300 rounded-full text-white"
                >
                {playing[src] ? <FaPause /> : <FaPlay />}
                </button>
                <button
                  onClick={() => stopSound(src)}
                  className="text-white ring-1 ring-slate-300 px-3 py-1 rounded-full"
                >
                 <FaStop />
                </button>
                <button
                onClick={() => toggleLoop(src)}
                className={`w-10 h-10 flex items-center justify-center rounded-full text-sm transition-colors duration-200 ${
                  looping[src] ? 'bg-richOrange text-white' : 'bg-gray-600 text-white'
                }`}
                aria-label="Toggle Loop"
                >
                    <FaRedo />
                </button>


              </div>

              
            </div>

           
            <div className="w-1/6 flex flex-col items-center justify-center ring-1 ring-white">
              
              
              {showVolume[src] && (
              <div className="h-24 flex items-center ">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volumes[src]}
                  onChange={(e) => setVolume(src, parseFloat(e.target.value))}
                  className="transform -rotate-90 w-24 accent-richOrange" // Rotate and size
                />
              </div>)}
            
             
              <button 
                className="block text-sm text-white mb-2 text-center " 
                onClick={() => toggleVolumeVisibility(src)}>
                    🕩
              {/* 🕩 {Math.round(volumes[src] * 100)}% */}
              </button>
            </div>
            </div>
            {/* Progress Bar */}
            <div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.001"
                  value={progress[src]}
                  onChange={(e) => seekSound(src, parseFloat(e.target.value))}
                  className="w-full mt-4 accent-richOrange"
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoundBoard;