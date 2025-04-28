import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/awd1000-final-project/', // 👈 MUST match your repo name
  plugins: [react()],
})
