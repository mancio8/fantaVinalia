/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"),require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
          
					"primary": "#e11d48",
							 
					"secondary": "#fde68a",
							 
					"accent": "#16a34a",
							 
					"neutral": "#001418",
							 
					"base-100": "#321a2e",
							 
					"info": "#00f5ff",
							 
					"success": "#00d655",
							 
					"warning": "#ffc048",
							 
					"error": "#ed3e55",
							 },
			},
		  ],
		},
	  }

