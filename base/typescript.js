module.exports = {
  extends: ['airbnb-typescript/base', './prettier'],
  plugins: ['eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
  ignorePatterns: ['dist/**/*'],
  overrides: [
    {
      files: ['*.d.ts'],
      rules: {
        'no-var': 'off',
        'vars-on-top': 'off',
      },
    },
  ],
};
