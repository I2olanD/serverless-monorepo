const presets = [
  [
    "@babel/preset-env",
    {
      "targets": {
        "node": "8.10"
      }
    }
  ]
];

const plugins = [
  "source-map-support",
  [
    "module-resolver",
    {
      "alias": {
        "lib": "./lib"
      }
    }
  ]
];

module.exports = { presets, plugins };
