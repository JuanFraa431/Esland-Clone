import animations from 'tailwindcss-animated'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
			'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
			'./node_modules/flowbite/**/*.js',
			"./src/**/*.{html,js}",
			"./node_modules/tw-elements/dist/js/**/*.js"],
	theme: {
		extend: {},
	},
	plugins: [animations,
		require('flowbite/plugin', "tw-elements/dist/plugin.cjs")],
		darkMode: "class"
}

