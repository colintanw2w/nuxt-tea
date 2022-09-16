import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    // https://vitejs.dev/config/
    plugins: [vue()],
    test: {
        globals: true,
        environment: 'jsdom'
    }
});
