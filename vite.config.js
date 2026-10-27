import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function spaRoutesPlugin() {
  return {
    name: 'spa-routes-fallback',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexHtmlPath = path.join(distDir, 'index.html')
      if (!fs.existsSync(indexHtmlPath)) return

      const html = fs.readFileSync(indexHtmlPath, 'utf8')
      const routes = ['about', 'services', 'gallery', 'reviews', 'contact', 'privacy', 'privacy-policy']

      routes.forEach(route => {
        const routeDir = path.join(distDir, route)
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true })
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), html)
      })

      // Also create 404.html for static hosts fallback
      fs.writeFileSync(path.join(distDir, '404.html'), html)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), spaRoutesPlugin()],
  server: {
    port: 3000,
    open: true
  }
})
