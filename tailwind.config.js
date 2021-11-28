const { spacing } = require('tailwindcss/defaulttheme');

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            padding: {
                '5/6': '83.333333%',
            },
            spacing: {
                88: '22rem',
            },
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
