module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'jasmine': true
  },
  'extends': 'standard',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018
  },
  'rules': {
  },
  'plugins': [
    'jasmine'
  ]
}
