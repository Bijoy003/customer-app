const path = require('path');
const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'module_federation_dashboard_remote',

  exposes: {
    './Module': path.resolve(__dirname, 'src/app/dashboard/dashboard.module.ts'),
  },

  shared: {
    '@angular/core': { singleton: true, strictVersion: true },
    '@angular/common': { singleton: true, strictVersion: true },
    '@angular/router': { singleton: true, strictVersion: true },
  }

});