const rules = {
  '@eslint-react/hooks-extra/no-direct-set-state-in-use-effect': 'off',
  'react-refresh/only-export-components': 'warn',
  'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
  'react/react-in-jsx-scope': 'off',
  'react/display-name': 'off',
};

module.exports = {
  extends: ['./base', 'plugin:react-hooks/recommended', 'plugin:react/recommended'],
  plugins: ['@eslint-react/eslint-plugin', 'react-refresh'],
  rules,
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: ['plugin:@eslint-react/recommended-type-checked-legacy'],
      rules,
    },
  ],
};
