module.exports = {
    "env": {
        "node": true,
        "es6": true,
        "browser": true
    },
    "extends": ["plugin:react/recommended"],
    "plugins": ["react"],
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
        "sourceType": "module"
    },
    "rules": {
        "react/prop-types": [0],
        "no-extra-boolean-cast": 0,
        "no-console": [
            "error",
            {
                allow: ["log", "error"]
            }
        ],
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "unix"
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