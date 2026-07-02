const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

//   remotes: {
//   "module_federation_dashboard_remote":
//     "module_federation_dashboard_remote@http://localhost:4201/remoteEntry.js"
// },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
