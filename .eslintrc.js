module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-in-parens":                  // require spaces in parens but not for empty parens.
        [
            2,
            "always",
            { "exceptions": ["empty"] }
        ],
        "space-before-function-paren":      // function and (...) should not be separated by spaces
        [
            2,
            "never"
        ]
    }

};
