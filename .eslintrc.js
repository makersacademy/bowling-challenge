module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    "no-underscore-dangle": "off",
    "prefer-arrow-callback": "off",
    "no-undef": "off"
  },
};
