import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    resolve(),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs({ include: ['./index.js', 'node_modules/**'] }),
  ],
});
