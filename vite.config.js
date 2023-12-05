/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import copy from 'rollup-plugin-copy'
import path from 'path';

const useMath = `@use 'sass:math' as math;`
const famScssPath = './node_modules/fam-style/src/stylesheets/fam-style.scss';
const famFontsPath = './node_modules/fam-style/src/fonts/';
const famImagesPath = './node_modules/fam-style/src/img/';

const config = {
  server: { port: 3001 },
  base: '/',
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      reporter: ["text", "html"],
    }
  },
  plugins: [
    copy({
      targets: [
        { src: famFontsPath, dest: 'public' },
        { src: famImagesPath, dest: 'public' }
      ]
    }),
    react()
  ],
  resolve: { 
    alias: { 
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/_application'),
      '@dom': path.resolve(__dirname, './src/_domain'),
      '@inf': path.resolve(__dirname, './src/_infrastructure'),
      '@ui': path.resolve(__dirname, './src/_ui')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `${useMath} @import "${famScssPath}";`
      }
    }
  }
};

export default defineConfig(config);
