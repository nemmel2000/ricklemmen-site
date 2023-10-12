// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // colorMode:
    modules: ["@nuxtjs/color-mode"],
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
});
