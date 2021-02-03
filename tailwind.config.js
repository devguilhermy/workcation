const colors = require("tailwindcss/colors");

module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "brand-blue": "#1992d4",
                blueGray: colors.blueGray,
                orange: colors.orange,
                amber: colors.amber,
                lime: colors.lime,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                violet: colors.violet,
                fuchsia: colors.fuchsia,
                pink: colors.pink,
                rose: colors.rose,
            },
            spacing: {
                128: "32rem",
            },
        },
    },
    variants: {
        extend: {},
        backgroundColor: ["responsive", "hover", "focus", "active"],
    },
    plugins: [],
};
