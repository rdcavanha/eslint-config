module.exports = {
  extends: ['airbnb', 'airbnb-typescript', '../prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
};
