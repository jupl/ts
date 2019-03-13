const preset = require('ts-jest/jest-preset')

module.exports = {
  ...preset,
  coverageDirectory: '<rootDir>/.coverage',
  globals: {
    'ts-jest': {
      babelConfig: {
        plugins: ['dynamic-import-node'],
      },
      tsConfig: '<rootDir>/node_modules/@jupl/ts/config/node.json',
    },
  },
  moduleNameMapper: {
    '^~/(.*)': '<rootDir>/src/$1',
  },
}
