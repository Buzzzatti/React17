// .eslintrc.js

module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the TypeScript parser
    parserOptions: {
        ecmaVersion: 'latest', // Use the latest ECMAScript version
        sourceType: 'module', // Allows the use of imports
        ecmaFeatures: {
            jsx: true, // Enables JSX parsing
        },
        project: './tsconfig.json', // Path to your tsconfig.json
    },
    env: {
        browser: true, // Sets the environment to browser
        es2021: true, // Enables ES6 globals and features
    },
    plugins: ['@typescript-eslint', 'react',],
    extends: [
        'plugin:react/recommended',
        'airbnb'],
    rules: {
        'no-shadow': 'off',
        'import/extensions': 'off',
        'no-underscore-dangle': 'off',
        'import/no-unresolved': 'off',
        "react/react-in-jsx-scope": "off",
        'react/require-default-props': 'off',

        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': 'off',

        "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx", ".tsx"] }],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-indent': [2, 4],
        'indent': [2, 4],

        'react/jsx-props-no-spreading': 'warn',
        'no-unused-vars': 'warn',
    },
    globals: {
        '__IS_DEV__': true,
    }
};
