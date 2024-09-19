# @rdcavanha/eslint-config

Opinionated and strict ESLint configs for Node and React projects.

> [!NOTE]  
> These configs are compatibles with the legacy format only. Upgrading to new flat config format will be considered once it has been adopted by major frameworks.

## Usage
This package is not available on NPM and therefore needs to be installed directly from GitHub.

1. Install ESLint version `8.57.1`:
    ```shell
    npm i -D eslint@8.57.1
    ```
2. Manually add this package to your `devDependencies` in your `package.json`:
    ```json
    "devDependencies": {
      "@rdcavanha/eslint-config": "git+https://github.com/rdcavanha/eslint-config.git"
    }
    ```

    If no commit is specified, the last commit on the `master` branch will be used. To specify a commit, add its hash at the end of the URL:

    ```json
    "devDependencies": {
      "@rdcavanha/eslint-config": "git+https://github.com/rdcavanha/eslint-config.git#somecommithash"
    }
    ```

3. In your project, create an ESLint config file `.eslintrc.cjs` and extend the config you would like to you use. For example, in a React + TypeScript project, the config would look like this:
    ```js
    module.exports = {
      extends: ['@rdcavanha/eslint-config/typescript/react'],
    };
    ```

4. If your project uses TypeScript, create a file named `tsconfig.eslint.json` then add all the files that should be linted. Example of a Vite project:
    ```json
    {
      "extends": "./tsconfig.json",
      "include": ["src", ".eslintrc.cjs", "vite.config.ts"]
    }
    ```

## Development
ESLint configurations are particularly tricky to test with some package managers due to the need of dependency hoisting. Given that this package is not available on NPM, the easiest way to try a rule/plugin change is:

1. Fork this repo and create a new branch.
2. On your branch, do the changes you need, such as enabling/disabling rules and etc.
3. Commit and push your so you generate a commit hash and make it available in your remote repository.
4. In the project you want to use this config, add the commit hash of your changes at the end of URL (see Usage section above).
5. Run `npm i` or the equivalent command of your package manager.
6. Repeat these steps as needed until the changes are to your liking.