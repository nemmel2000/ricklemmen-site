// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
