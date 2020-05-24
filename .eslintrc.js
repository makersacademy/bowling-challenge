/* eslint-disable */

module.exports = {
  'plugins': ['jasmine'],
  'env': {
    'browser': true,
    'jasmine': true,
    'node': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'extends': 'plugin:jasmine/recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
