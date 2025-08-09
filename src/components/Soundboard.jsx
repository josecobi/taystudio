import React, { useRef, useState, useEffect } from 'react';
import { Howl } from 'howler';
import { FaPlay, FaPause, FaStop, FaRedo, FaVolumeUp } from 'react-icons/fa';
import Player from './Player';


// const SoundCategories = [
//   { label: 'Background Soundscapes', sounds: BGSounds },
//   { label: 'SFX', sounds: SFXSounds },
// ]

// const BGSounds = [
//   { label: 'Celestial Echoes', src: '/sounds/Background_Soundscapes/Celestial_Echoes.mp3' },
//   { label: 'City Nights', src: '/sounds/Background_Soundscapes/City_Nights.mp3' },
//   { label: 'Hidden_Grove', src: '/sounds/Background_Soundscapes/Hidden_Grove.mp3' },
//   { label: 'Zen_Harmony', src: '/sounds/Background_Soundscapes/Zen_Harmony.mp3' },
// ];

// const SFXSounds = [
//   { label: 'Explosion', src: '/sounds/SFX/Explosion.mp3' },
//   { label: 'Mech Walk', src: '/sounds/SFX/Mech_Walk.mp3' },
//   { label: 'MEMP', src: '/sounds/SFX/MEMP.mp3' },
// ];

// const SoundBoard = () => 
//   {
    

//     return (
//       <div className="p-4 space-y-6">
        
//         <h2 className="text-pretty text-2xl font-semibold tracking-tight text-deepTeal">Soundboard</h2>
//         <p>At the heart of our audio design process lies the soundboard — the control center where creativity meets precision. Our state-of-the-art soundboards allow for seamless mixing, layering, and manipulation of audio elements to craft a rich, immersive sound experience. Whether we're balancing vocals, fine-tuning instruments, or sculpting textures for film, games, or albums, our engineers use the soundboard to shape every sonic detail with expert care. This is where raw recordings are transformed into polished, professional soundscapes.</p>
//         {SoundCategories.map(({ label, sounds }) => (
//          <div key={label}>
//           <h3 className="text-xl font-semibold tracking-tight mb-4">{label}</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
//             {sounds.map(({ label: soundLabel, src }) => (
//               <Player
//                 key={soundLabel}
//                 label={soundLabel}
//                 src={src}
//                 sounds={sounds}
//               />
//             ))}
//             </div>
            
        
//         <h3 className="text-pretty text-xl font-semibold tracking-tight">Background Soundscapes</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
//           {BGSounds.map(({ label, src }) => (
//             <Player
//               key={label}
//               label={label}
//               src={src} 
//               sounds={BGSounds}/>
//           ))}
//         </div>
//         <h3 className="text-pretty text-xl font-semibold tracking-tight">SFX</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
//           {SFXSounds.map(({ label, src }) => (
//             <Player
//               key={label}
//               label={label}
//               src={src} 
//               sounds={SFXSounds}/>
//           ))}
//         </div>
//       </div>
//     );
//   };

// export default SoundBoard;


// Sounds grouped by categories
const BGSounds = [
  { label: 'Celestial Echoes', src: '/sounds/Background_Soundscapes/Celestial_Echoes.mp3' },
  { label: 'City Nights', src: '/sounds/Background_Soundscapes/City_Nights.mp3' },
  { label: 'Hidden Grove', src: '/sounds/Background_Soundscapes/Hidden_Grove.mp3' },
  { label: 'Zen Harmony', src: '/sounds/Background_Soundscapes/Zen_Harmony.mp3' },
];

const SFXSounds = [
  { label: 'Explosion', src: '/sounds/SFX/Explosion.mp3' },
  { label: 'Mech Walk', src: '/sounds/SFX/Mech_Walk.mp3' },
  { label: 'MEMP', src: '/sounds/SFX/MEMP.mp3' },
];

const SoundCategories = [
  { label: 'Background Soundscapes', sounds: BGSounds },
  { label: 'SFX', sounds: SFXSounds },
];

const SoundBoard = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Loop through each sound category */}
      {SoundCategories.map(({ label, sounds }) => (
        <div key={label}>
          <h3 className="text-xl text-gray-800 font-semibold tracking-tight mb-4">{label}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {sounds.map(({ label: soundLabel, src }) => (
              <Player
                key={soundLabel}
                label={soundLabel}
                src={src}
                sounds={sounds}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SoundBoard;