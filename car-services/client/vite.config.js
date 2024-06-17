import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // This should be the root of your Vite project (client directory)
  build: {
    outDir: 'dist', // Output directory for the build files
  },
});
