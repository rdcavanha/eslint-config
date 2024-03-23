# @rdcavanha/eslint-config
## Usage with PNPM
The instructions are for PNPM. Please adapt them as needed for your package manager of choice.
1. Install `eslint`
2. Create a file in the user's home dir named `.gitconfig` with the following content:
    ```
    [url "https://github.com/"]
      insteadOf = git@github.com:
    [url "https://"]
      insteadOf = git://
    ```
3. Add this package as a dependency to your project's `package.json`:
    ```json
    "@rdcavanha/eslint-config": "git+https://github.com/rdcavanha/eslint-config.git"
    ```
4. Run `pnpm i`
5. In your eslint configuration file, extend one of the configurations from this package. For example:
    ```js
    module.exports = {
      extends: ['@rdcavanha/eslint-config/typescript/react'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.eslint.json',
      },
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    };
    ```