/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#C4A76B", // Muted Gold
				primaryDark: "#7A5A31", // Darker Gold/Bronze
				secondary: "#E0C3A0", // Light Beige (Button BG)
				secondaryDark: "#4E2A14", // Dark Brown (Dark Mode BG)
				accent: "#F8F4E1", // Soft Cream/Background
				textDark: "#7A5A31", // Text color for buttons
				textLight: "#C4A76B", // Light text for dark mode

				///////
				// primary: "#00E5FF", // Electric Cyan
				// secondary: "#FF00FF", // Neon Magenta
				// tertiary: "#FFEA00", // Cyber Yellow
				// accent: "#00FF88", // Neon Green
				// primaryDark: "#008C99", // Deep Cyan
				// secondaryDark: "#990099", // Dark Magenta
				// tertiaryDark: "#998C00", // Gold Olive
				// accentDark: "#008C55", // Dark Teal Green

				/////// Elegant & Minimalist
				// primary: "#BFA181", // Warm Beige
				// secondary: "#D9C5B2", // Soft Cream
				// tertiary: "#8C6A5D", // Coffee Brown
				// accent: "#E6B17E", // Copper Gold
				// primaryDark: "#7A624F", // Dark Beige
				// secondaryDark: "#A08B78", // Faded Cream
				// tertiaryDark: "#5C4235", // Deep Coffee
				// accentDark: "#A97D56", // Burnished Copper

				/////////Modern Blue & Orange
				primary: "#1E90FF", // Vivid Blue
				secondary: "#FF8C00", // Deep Orange
				tertiary: "#20B2AA", // Light Sea Green
				accent: "#FFD700", // Golden Yellow
				primaryDark: "#0F4C75", // Dark Azure
				secondaryDark: "#CC6A00", // Burnt Orange
				tertiaryDark: "#17827D", // Teal Green
				accentDark: "#B38600", // Dark Gold
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
