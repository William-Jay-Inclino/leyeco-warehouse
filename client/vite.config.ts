import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // @ts-ignore
  base: process.env.VITE_BASE_URL || '/',
  plugins: [vue()],
})
