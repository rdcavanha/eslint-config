module.exports = {
  env: {
    node: true,
  },
  extends: ['./base/javascript'],
  rules: {
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-underscore-dangle': ['error', { allow: ['__dirname', '__filename'] }],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: ['./base/typescript'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            filter: {
              regex: '^(__dirname|__filename)$',
              match: false,
            },
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
      },
    },
  ],
};
