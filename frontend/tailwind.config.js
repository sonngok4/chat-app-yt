/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';
import daisyui from 'daisyui';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF6363',
				secondary: '#58B19F',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [forms, daisyui],
};
