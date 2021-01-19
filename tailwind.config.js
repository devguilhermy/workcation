module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                "brand-blue": "#1992d4",
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
