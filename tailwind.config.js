module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
			padding: {
				"5/6": "83.333333%"
			}
		},
    },
    variants: {
        extend: {
            backgroundColor: ['active'],
            textColor: ['active'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
