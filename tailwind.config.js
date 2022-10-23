/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./views/*.ejs"],
	theme: {
		extend: {},
		colors: {
			backgroundGradient1: "#E7B505",
			backgroundGradient2: "#FC9330",
			formBackgroundGradient1: "#FF824F",
			formBackgroundGradient2: "#FFE248",
			btncolor: "#fff",
			btncolorHover: "#fffaaa",
			inputColorHover: "#fffccc",
		},
		borderRadius: {
			large: "40px",
			lg: "0.5rem",
		},

		screens: {
			xsm: "300px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
		},
	},
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
