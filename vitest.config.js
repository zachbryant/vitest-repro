import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    deps: {
      experimentalOptimizer: {
        enabled: false,
      },
    },
    environment: 'happy-dom',
    globals: true,
    slowTestThreshold: 5 * 1000,
    watch: false,
  },
  plugins: [reactPlugin()],
});
