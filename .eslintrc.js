module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jest/globals": true,
    },
    "extends": ["eslint:recommended", "plugin:jest/recommended"],
    "overrides": [
        {
          "files": [
            "**/*.test.js"
          ]
        }
    ],
    "plugins": ["jest"],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "rules": {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      },
    
}
