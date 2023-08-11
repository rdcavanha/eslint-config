module.exports = {
  extends: ['airbnb/base', 'airbnb-typescript/base', '../prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'import/prefer-default-export': 0,
  },
};
