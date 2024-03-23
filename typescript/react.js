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
    {
      files: ['vite.config.ts', 'tailwind.config.js'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['src/vite-env.d.ts'],
      rules: {
        'no-underscore-dangle': 'off',
        '@typescript-eslint/naming-convention': 'off',
      },
    },
  ],
};
