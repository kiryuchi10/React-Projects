const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',  // Backend server URL
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',  // Remove /api prefix when forwarding to backend
      },
    })
  );
};
