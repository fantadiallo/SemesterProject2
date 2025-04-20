import { defineConfig, resolveConfig } from 'vite';
import path from 'path';
resolveConfig

export default defineConfig({
  root: './',
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        login: path.resolve(__dirname, 'auth/login.html'),
        register: path.resolve(__dirname, 'auth/register.html'),
        details: path.resolve(__dirname, 'details/index.html'),
        profile: path.resolve(__dirname, 'profile/index.html'),
        create: path.resolve(__dirname, 'pet/create.html'),
        notFound: path.resolve(__dirname, 'NotFound/index.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'],
      },
    },
  },
});
