import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { runPrerender } from './scripts/prerender.js'

function prerenderPlugin() {
  return {
    name: 'prerender-plugin',
    closeBundle() {
      runPrerender()
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), prerenderPlugin()],
  server: {
    port: 3000,
    open: true
  }
})
