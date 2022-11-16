module.exports = {
  extends: ['airbnb-base', './prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'prefer-destructuring': 'off',
    'require-await': 'error',
    'no-restricted-exports': 'off',
  },
  ignorePatterns: ['dist/**/*'],
};
