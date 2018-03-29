'use strict';

module.exports = {
  "extends": [
    "standard",
    "plugin:vue-libs/recommended"
  ],
  "plugins": [
    "mocha",
    "react"
  ],
  "rules": {
    "no-labels": 0,
    "no-empty-label": 0,
    "no-redeclare": 0,
    "semi": [2, "always"],
    "space-before-function-paren": 0,
    "no-new": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/react-in-jsx-scope": 2
  },
  "env": {
    "es6": true,
    "browser": true,
    "mocha": true,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    }
  }
};