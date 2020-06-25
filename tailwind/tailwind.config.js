module.exports = {
	plugins: [
		require('tailwindcss-animations'),
	],
	theme: {
		extend: {
			animations: {
				spin: {
					from: {
						transform: "rotate(0deg)",
					},
					to: {
						transform: "rotate(360deg)",
					},
				},
			},
			minWidth: {
				"1/5": "20%",
				"1/4": "25%",
				"2/5": "40%",
				"1/2": "50%",
				"3/5": "60%",
				"3/4": "75%",
				"4/5": "80%",
			},
			maxWidth: {
				"1/5": "20%",
				"1/4": "25%",
				"2/5": "40%",
				"1/2": "50%",
				"3/5": "60%",
				"3/4": "75%",
				"4/5": "80%",
			},
			colors: {
				pink: {
					100: "#FFEBF3",
					200: "#FFCEE2",
					300: "#FFB0D1",
					400: "#FF75AE",
					500: "#FF3A8B",
					600: "#E6347D",
					700: "#992353",
					800: "#731A3F",
					900: "#4D112A",
				},
				purple: {
					100: "#F0E9FA",
					200: "#DAC8F1",
					300: "#C4A6E9",
					400: "#9864D9",
					500: "#6C21C8",
					600: "#611EB4",
					700: "#411478",
					800: "#310F5A",
					900: "#200A3C",
				},
				tfl: {
					'bakerloo': '#b36305',
					'central': '#e32017',
					'circle': '#ffd300',
					'district': '#00782a',
					'hammersmith-city': '#f3a9bb',
					'jubilee': '#909598',
					'metropolitan': '#9b0056',
					'northern': '#000000',
					'piccadilly': '#003688',
					'victoria': '#0098d4',
					'waterloo-city': '#95cdba',
					
					'dlr': '#00a4a7',
					'overground': '#ee7c0e',
					'tfl-rail': '#003688',
				},
			},
		},
	},
};
