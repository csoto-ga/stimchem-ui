const path = require('path');

module.exports = {
  typescript: {
    enableTypeChecking: true /* (default value) */,
  },
  webpack: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
};
