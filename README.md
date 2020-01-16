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
```

## Usage

### TypeScript
Add to `tsconfig.json`:
```json
{
  "extends": "@jupl/ts"
}
```

### Prettier
Add to `.prettierrc.json`:
```json
"@jupl/ts/format"
```

### ESLint
Add to `eslint.json`:
```json
{
  "extends": "@jupl/ts/lint"
}
```

### Jest
Add to `jest.config.js`, `jest` field in `package.json`, or Jest config:
```json
{
  "preset": "@jupl/ts"
}
```
