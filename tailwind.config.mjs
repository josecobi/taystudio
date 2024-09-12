/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
			'inset': 'inset 0 0 0.8px 2px rgba(255, 255, 255, 1)',
		  }
		},
		
	},
	darkMode: 'class',
	// plugins: [require('@tailwindcss/forms')],
	
}
