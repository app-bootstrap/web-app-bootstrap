'use strict';

module.exports = {
  "presets": [
    "@babel/preset-react",
    "@babel/preset-env"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "corejs": 2
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-json-strings",
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions"
  ],
  "comments": false,
  "env": {
    "test": {
      "plugins": [
        "istanbul",
      ],
    },
  }
};