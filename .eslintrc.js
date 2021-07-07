module.exports = {
  env: {
    browser: true,
    es2021: true,
    jasmine: true,
    commonjs: true,
  },
  extends: ["standard", "plugin:jasmine/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ["jasmine"],
  rules: {},
};
