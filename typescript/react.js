module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', '../prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'react/require-default-props': 0,
      },
    },
  ],
};
