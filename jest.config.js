'use strict'

const preset = require('./jest-preset')

module.exports = {
  ...preset,
  globals: {
    ...preset.globals,
    'ts-jest': {
      ...preset.globals['ts-jest'],
      tsConfig: '<rootDir>/config/node.json',
    },
  },
}
