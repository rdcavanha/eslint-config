# @rdcavanha/eslint-config

## Usage
### pnpm
1. Create a file in the user's home dir named `.gitconfig` with the following content:
    ```
    [url "https://github.com/"]
      insteadOf = git@github.com:
    [url "https://"]
      insteadOf = git://
    ```
2. Add the dependency to `package.json`, replacing `<token>` with the generated token on GitHub:
    ```json
    "@rdcavanha/eslint-config": "git+https://github_pat_<token>@github.com/rdcavanha/eslint-config.git"
    ```
3. Run `pnpm i`