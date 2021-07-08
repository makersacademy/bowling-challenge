module.exports = {
    "extends": "airbnb-base",
    "globals": {
      "expect": true
    },
    "plugins": [
      "chai-friendly",
      "mocha",
    ],
    "env": {
      browser: true,
      "mocha": true,
      "webextensions": true
    },
    "rules": {
      "global-require": 0,
      "linebreak-style": ["error", "windows"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
      "chai-friendly/no-unused-expressions": 2,
      "no-unused-expressions": 0,
      "no-underscore-dangle": 0,
      "prefer-arrow-callback": 0,
      "linebreak-style": 0,
      "semi": ["error", "never"],
      "prefer-rest-params": 0,
      "no-param-reassign": 0,
      "no-restricted-globals": 0,
      "no-continue": 0,
      "class-methods-use-this": 0,
      "mocha/prefer-arrow-callback": 2,
      "func-names": 0,
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
  }
  };