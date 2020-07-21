'use strict'

const path = require('path')
const preset = require('ts-jest/jest-preset')

module.exports = {
  ...preset,
  coverageDirectory: '<rootDir>/.coverage',
  globals: {
    'ts-jest': {
      babelConfig: {
        plugins: ['dynamic-import-node'],
      },
      isolatedModules: true,
      tsConfig: path.join(__dirname, './config/node.json'),
    },
  },
}
