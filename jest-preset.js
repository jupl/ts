'use strict'

const path = require('path')
const preset = require('ts-jest/jest-preset')
const {pathsToModuleNameMapper} = require('ts-jest/utils')
const {
  compilerOptions: {paths},
} = require('./config/base')

module.exports = {
  ...preset,
  coverageDirectory: '<rootDir>/.coverage',
  globals: {
    'ts-jest': {
      babelConfig: {
        plugins: ['dynamic-import-node'],
      },
      tsConfig: path.join(__dirname, './config/node.json'),
    },
  },
  moduleNameMapper: pathsToModuleNameMapper(paths),
}
