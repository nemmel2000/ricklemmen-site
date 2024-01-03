/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
        theme: {
            container: {
                center: true,
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1600px',
                '3xl': '2000px',
            },
            extend: {
                zIndex: {
                    1: '1',
                    99: '99',
                    100: '100',
                },
                spacing: {
                    15: '3.75rem',
                },
                borderRadius: {
                    extra: '80px',
                },
                screens: {
                    '3xl': '2000px',
                },
                fontFamily: {
                    jakarta: ['Plus Jakarta Sans', 'sans-serif'],
                },
                opacity: {
                    15: '0.15',
                },
                colors: {
                    primary: {
                        DEFAULT: '#F78E3F',
                    },
                    secondary: {
                        DEFAULT: '#30AEF5',
                        light: '#DFF9FB',
                    },
                    tertiary: '#0D0D0E',
                    'bg': "#FCFCFC",
                },
            },
        },
};
