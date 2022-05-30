module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['wesbos'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
  },
};
