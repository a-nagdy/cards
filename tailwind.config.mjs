/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				custom: '2px 0px 5px 0px rgb(0 0 0 / 26%), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
			  },
		},
	},
	plugins: [],
}
