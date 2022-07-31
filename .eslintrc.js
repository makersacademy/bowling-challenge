module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    "jest/globals": true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  },
  "plugins": ["jest"]
}
