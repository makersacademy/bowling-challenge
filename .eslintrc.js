module.exports = {
  env: {
    jasmine: true,
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: [2, 'always',],
    // semi: [2, 'always', { "omitLastInOneLineBlock": true}],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }]
  },
};
