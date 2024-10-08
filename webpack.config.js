const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "store",
  filename: "remoteEntry.js",

  exposes: {
    "./Module": "./src/app/app.module.ts",
    "./Component": "./src/app/shared/components/checkout/checkout.component.ts",
    "./ComponentP":"./src/app/shared/modal/modal-menu/modal-menu.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});
