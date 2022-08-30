import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    buildModules: [
        // pinia plugin
        '@pinia/nuxt',
    ],
    typescript: {
        strict: false
    }
})
