/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brandPrimary: "#C4A76B", // Muted Gold
				brandPrimaryDark: "#7A5A31", // Darker Gold/Bronze
				brandSecondary: "#E0C3A0", // Light Beige (Button BG)
				brandSecondaryDark: "#4E2A14", // Dark Brown (Dark Mode BG)
				brandAccent: "#F8F4E1", // Soft Cream/Background
				brandTextDark: "#7A5A31", // Text color for buttons
				brandTextLight: "#C4A76B", // Light text for dark mode

				///////
				// BrandPrimary: "#00E5FF", // Electric Cyan
				// BrandSecondary: "#FF00FF", // Neon Magenta
				// BrandTertiary: "#FFEA00", // Cyber Yellow
				// BrandAccent: "#00FF88", // Neon Green
				// BrandPrimaryDark: "#008C99", // Deep Cyan
				// BrandSecondaryDark: "#990099", // Dark Magenta
				// BrandTertiaryDark: "#998C00", // Gold Olive
				// BrandAccentDark: "#008C55", // Dark Teal Green

				/////// Elegant & Minimalist
				// BrandPrimary: "#BFA181", // Warm Beige
				// BrandSecondary: "#D9C5B2", // Soft Cream
				// BrandTertiary: "#8C6A5D", // Coffee Brown
				// BrandAccent: "#E6B17E", // Copper Gold
				// BrandPrimaryDark: "#7A624F", // Dark Beige
				// BrandSecondaryDark: "#A08B78", // Faded Cream
				// BrandTertiaryDark: "#5C4235", // Deep Coffee
				// BrandAccentDark: "#A97D56", // Burnished Copper

				/////////Modern Blue & Orange
				// BrandPrimary: "#1E90FF", // Vivid Blue
				// BrandSecondary: "#FF8C00", // Deep Orange
				// BrandTertiary: "#20B2AA", // Light Sea Green
				// BrandAccent: "#FFD700", // Golden Yellow
				// BrandPrimaryDark: "#0F4C75", // Dark Azure
				// BrandSecondaryDark: "#CC6A00", // Burnt Orange
				// BrandTertiaryDark: "#17827D", // Teal Green
				// BrandAccentDark: "#B38600", // Dark Gold
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
