'use strict'

require('ts-node').register({compilerOptions: {module: 'commonjs'}})

module.exports = require('./lint/index.ts').default
