import type { Config } from 'tailwindcss'
import daisyui from 'daisyui'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {},
	},
	plugins: [daisyui],
	darkMode: 'class', // 使用 class 策略启用暗模式
	daisyui: {
		themes: ['winter', 'dracula'],
	},
}

export default config
