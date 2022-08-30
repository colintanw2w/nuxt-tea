import { defineNuxtConfig } from 'nuxt'
import path from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/assets/scss/tailwind.scss'],
    build: {
        extractCSS: true,
        postcss: {
            plugins: { tailwindcss: path.resolve(__dirname, './tailwind.config.js') }
        }
    },
    purgeCSS: { mode: 'postcss' },

    modules: ['@nuxtjs/tailwindcss'],
    buildModules: [
        // pinia plugin
        '@pinia/nuxt',
    ],
    typescript: {
        strict: false
    }
})
