module.exports = {
  extends: ['airbnb/base', 'airbnb-typescript/base', '../prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'no-await-in-loop': 0,
    'no-restricted-syntax': 0,
  },
};
