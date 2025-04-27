import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  css: {
    modules: {
      generateScopedName: (className, filePath) => {
        const path = filePath
          .split('src/')
          .pop()
          ?.split('/')
          .filter((_, i, arr) => i !== arr.length - 1)
          .join('-');

        return `${path}__${className}`; //--${Math.random().toString(36).substring(5)}`;
      },
      // generateScopedName: '[path]_[local]__[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
});
