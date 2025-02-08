import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    watch: {
      usePolling: true,  // Enable polling to watch file changes
    },  // Change to your preferred port
  },
  
})
