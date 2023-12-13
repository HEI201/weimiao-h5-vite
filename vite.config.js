import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: true,
    proxy: {
      '/api': {
        target: 'http://112.74.72.93:3800',
        changeOrigin: true,
      },
      '/videos': {
        target: 'http://112.74.72.93:3800',
        changeOrigin: true,
      }
    }
  }
});
