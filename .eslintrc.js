module.exports = {
    "env": {
        "browser": true,
        "jasmine": true
    },
    "extends": "eslint:recommended",
    "extends": "plugin:jasmine/recommended",
    "plugins": ["jasmine"],
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};