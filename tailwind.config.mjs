/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brandPrimary: '#C4A76B',  // Muted Gold
				brandPrimaryDark: '#7A5A31',  // Darker Gold/Bronze
				brandSecondary: '#E0C3A0',  // Light Beige (Button BG)
				brandSecondaryDark: '#4E2A14',  // Dark Brown (Dark Mode BG)
				brandAccent: '#F8F4E1',  // Soft Cream
				brandTextDark: '#7A5A31',  // Dark Text Color
				brandTextLight: '#C4A76B',  // Light Text Color
				navNearBlack: '#111111',
				navTextSoftWhite: '#E0D7C9',
				navTextHoverMutedViolet: '#A87CFF',
				navActiveLik: '#D4AFFF',

				// Warm tones from coolors palette
				deepNavy: '#001219',  
				deepTeal: '#005F73',  // Accent for links or small elements
				mutedTeal: '#0A9396',  // Subtle highlights, maybe buttons
				softTeal: '#94D2BD',  // Hover effects, dividers
				warmBeige: '#E9D8A6',  // Hero text, section backgrounds
				goldenOrange: '#EE9B00',  // Active buttons, highlights
				richOrange: '#CA6702',  // CTA buttons
				burntOrange: '#BB3E03',  // Button hover
				deepRed: '#AE2012',  // Borders, small accents
				boldRed: '#9B2226',  // Strongest accents, alerts
				cream: '#f8f9fa',
				accent: '#ff6b35',
				mutedGray: '#ebedef'

			  },
			boxShadow: {
			'inset': 'inset 0 0 0.8px 2px rgba(255, 255, 255, 1)',
		  },
		  fontFamily: {
			roboto: ['Roboto Slab', 'serif'],
			smokum: ['Smokum', 'cursive'],
		  },
		},
		
	},
	darkMode: 'class',
	
}
