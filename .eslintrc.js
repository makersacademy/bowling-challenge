module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jasmine": true
    },
    "plugins": ["jasmine"],
    "extends": ["eslint:recommended", "plugin:jasmine/recommended"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
    }
};
