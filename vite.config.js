import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Netlify and custom domains use root ('/'). GitHub Actions uses repository path ('/Company-portfolio/').
  base: process.env.GITHUB_ACTIONS ? '/Company-portfolio/' : '/',
})
