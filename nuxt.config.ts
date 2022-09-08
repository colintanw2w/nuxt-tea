import path, { resolve } from 'path';
import { defineNuxtConfig } from 'nuxt';
import svgLoader from 'vite-svg-loader';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/scss/main.scss', '@fortawesome/fontawesome-svg-core/styles.css'],
    alias: {
        '~scss': resolve(__dirname, './assets/scss')
    },
    build: {
        extractCSS: true,
        postcss: {
            plugins: { tailwindcss: path.resolve(__dirname, './tailwind.config.js') }
        },
        transpile: [
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/pro-solid-svg-icons',
            '@fortawesome/pro-regular-svg-icons',
            '@fortawesome/pro-light-svg-icons',
            '@fortawesome/free-brands-svg-icons',
            '@fortawesome/vue-fontawesome'
        ]
    },
    purgeCSS: { mode: 'postcss' },

    modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
    buildModules: [
        // pinia plugin
        '@pinia/nuxt'
    ],
    typescript: {
        strict: false
    },
    vite: {
        plugins: [
            svgLoader()
        ]
    }
});
