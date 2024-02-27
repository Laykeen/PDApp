import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { svelteInspector } from '@sveltejs/vite-plugin-svelte-inspector'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    svelteInspector({
      // https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
    })
  ],
  resolve: {
    alias: {
      "~": path.resolve('/src')
    }
  }
})
