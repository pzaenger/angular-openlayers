module.exports = {
  apps: [
    {
      name: 'angular-openlayers',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: 'dist/angular-openlayers',
        PM2_SERVE_PORT: +(process.env.PORT || 80)
      }
    }
  ]
};
