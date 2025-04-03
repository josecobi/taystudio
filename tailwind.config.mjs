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
