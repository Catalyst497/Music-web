/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary-bg': '#1e1e1e',
				'secondary-bg': '#1A1E1F',
				'secondary-color': 'rgb(255,255,255,0.25)',
				darkgray: 'rgba(255, 255, 255, 0.5)',
				'bright-yellow': '#FACD66',
				'average-blue': '#609EAF',
				'gray-text': '#EFEEE0',
			},
			gridTemplateAreas: {
				'song-desktop': 
				['cvr hrt hrt nme nme nme typ typ drn slt'],
				'song-mobile': ['cvr nme slt slt', 'cvr typ drn drn'],
			},
		},
		fontFamily: {
			quicksand: 'Quicksand, sans-serif',
		},
	},
	plugins: [require('@savvywombat/tailwindcss-grid-areas')],
	variants: {
		gridTemplateAreas: ['responsive'],
	},
};
