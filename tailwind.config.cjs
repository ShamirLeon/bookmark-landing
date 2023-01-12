/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				SoftBlue: '#5267DF',
				SoftRed: '#F95656',
				GrayishBlue: '#A9ABB6',
				DarkBlue: '#242B46',
			},
			fontFamily: {
				Rubik: 'Rubik',
			},
		},
	},
	plugins: [],
};
