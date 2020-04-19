<div align="center">
  <h1>eslint-config-thedaviddias</h1>

  <p>ESLint rules for all of my personal projects.</p>
</div>
---

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Table of Content

- [</div>](#div)
- [Table of Content](#table-of-content)
- [Installation](#installation)
- [Usage](#usage)
- [VSCode settings](#vscode-settings)
- [Inspiration](#inspiration)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

should be installed as one of your project's `devDependencies`:

```bash
npm install --save-dev eslint-config-thedaviddias
```

You can install the `peerDependencies` running the following command:

```bash
npx install-peerdeps --dev eslint-config-thedaviddias
```

## Usage

Create the `.eslintrc.js` and add the following extend:

```javascript
module.exports = {
  extends: 'thedaviddias',
  rules: {
    // you can override with you own rules here
  },
}
```

```bash
"scripts": {
  "lint": "npx eslint src/ --ext .js --max-warnings 0",
  "lint:fix": "npx eslint --fix src/ --ext .js --max-warnings 0"
},
```

## VSCode settings

Create a folder `.vscode` at the root of your currrent project with a `settings.json` file.

```bash
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  // Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
  "prettier.disableLanguages": ["javascript", "javascriptreact"],
```

## Inspiration

I can't thanks enough [@kentcdoodds](https://github.com/kentcdodds/eslint-config-kentcdodds) and [@wesbos](https://github.com/wesbos/eslint-config-wesbos) for the inspiration and their estlint-config I used to build my own.

## Licence

MIT
