import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
<<<<<<< Updated upstream
  root: './', // This should be the root of your Vite project (client directory)
  build: {
    outDir: 'dist', // Output directory for the build files
=======
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // Ensure this line is pointing to the correct entry point
    },
>>>>>>> Stashed changes
  },
});
