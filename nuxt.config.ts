// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    //devTools
    devtools:{
        enabled: true,
    },

    app:{
        head: {
            title: "Rick Lemmen",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { hid: "description", name: "description", content: "Portfolio site van Rick Lemmen - Front-end developer en webdesigner." },
            ],
            link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
        },
        layoutTransition: {
            name: "layout",
            mode: "out-in",
        },
    },

    // colorMode:
    modules: ["@nuxtjs/color-mode", "@nuxt/image",],
    colorMode: {
        classSuffix: "",
    },

    // tailwindcss:
    css: ["~/assets/style/main.css"],
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {}

        },
    },
    build: {
        transpile: ["gsap"],
    },
    image: {
        format: ['webp'],
        screens: {
            'xs': 320,
            'sm': 640,
            'md': 768,
            'lg': 1024,
            'xl': 1280,
            'xxl': 1536,
            '2xl': 1536
        },
    }
});
