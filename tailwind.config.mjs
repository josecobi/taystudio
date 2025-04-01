/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brandPrimary: "var(--color-brand-primary)", // Muted Gold
				brandPrimaryDark: "var(--color-brand-primary-dark)", // Darker Gold/Bronze
				brandSecondary: "var(--color-brand-secondary)", // Light Beige (Button BG)
				brandSecondaryDark: "var(--color-brand-secondary)", // Dark Brown (Dark Mode BG)
				brandAccent: "var(--color-accent)", // Soft Cream/Background
				brandTextDark: "var(--color-brand-text-dark)", // Text color for buttons
				brandTextLight: "var(--color-brand-text-light)", // Light text for dark mode

				
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
