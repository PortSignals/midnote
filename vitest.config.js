import { defineConfig } from 'vitest/config'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default defineConfig(({ mode }) => ({
    plugins: [svelte({
        preprocess: vitePreprocess()
    })],
    resolve: {
        conditions: mode === 'test' ? ['browser'] : [],
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.js']
    },
}))