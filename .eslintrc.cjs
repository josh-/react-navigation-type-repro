/* eslint-env node */
module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/strict', 'plugin:@typescript-eslint/strict-type-checked'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "./tsconfig.json",
    },
    plugins: ['@typescript-eslint'],
    root: true,
};