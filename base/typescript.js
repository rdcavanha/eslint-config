module.exports = {
  extends: ['airbnb-typescript/base', './prettier'],
  plugins: ['eslint-plugin-tsdoc'],
  rules: {
    'tsdoc/syntax': 'warn',
  },
  ignorePatterns: ['dist/**/*'],
};
