import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    // Optimize chunk size with better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor chunks for better caching
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
        // Add content hash for cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Disable source maps for production
    sourcemap: false,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Minify for smaller bundle sizes
    minify: 'esbuild',
    // Generate manifest for better caching
    manifest: true,
    // Enable brotli compression (requires plugin)
    reportCompressedSize: true,
  },
  // Performance optimizations
  optimizeDeps: {
    include: ['react', 'react-dom'],
    // Force pre-bundling for common dependencies
    force: true,
  },
})
