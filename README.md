# TypeScript Configurations

[![NPM](https://img.shields.io/npm/v/@jupl/ts.svg?style=flat-square)](https://www.npmjs.org/package/@jupl/ts)
[![Travis](https://img.shields.io/travis/jupl/ts.svg?label=travis&style=flat-square)](https://travis-ci.org/jupl/ts)
[![Dependencies](https://img.shields.io/david/jupl/ts.svg?style=flat-square)](https://david-dm.org/jupl/ts)
[![Peer Dependencies](https://img.shields.io/david/peer/jupl/ts.svg?style=flat-square)](https://david-dm.org/jupl/ts?type=peer)
[![Dev Dependencies](https://img.shields.io/david/dev/jupl/ts.svg?style=flat-square)](https://david-dm.org/jupl/ts?type=dev)

## About

Personal configurations for TypeScript projects. Sets up base path to `src/`. Includes:

- [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)

## Installation

```
npm install @jupl/ts
yarn add @jupl/ts
```

## Usage

### TypeScript

Add to `tsconfig.json`:

```json
{
  "extends": "@jupl/ts",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}
```

### Prettier

Install dependencies:

- `prettier`

Add to `.prettierrc.js`:

```js
module.exports = require('@jupl/ts/format')
```

### ESLint

Install dependencies:

- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-prettier`
- `eslint-import-resolver-node` (Yarn PnP)
- `eslint-plugin-functional`
- `eslint-plugin-import`
- `eslint-plugin-jsdoc`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-sonarjs`

Add to `.eslintrc.js`:

```js
module.exports = {
  ...require('@jupl/ts/lint'),
  // Additional options
}
```

### Jest

Install dependencies:

- `babel-plugin-dynamic-import-node`
- `babel-jest` (Yarn PnP)
- `jest`
- `ts-jest`

Add to `jest.config.js`:

```js
const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {compilerOptions} = require('./tsconfig')

module.exports = {
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  preset: '@jupl/ts',
}
```
