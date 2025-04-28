import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AWD1000-final-project/', // <-- THIS MUST BE SET!
  plugins: [react()],
})
