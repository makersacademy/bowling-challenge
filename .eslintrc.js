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
    'ecmaVersion': 11
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
