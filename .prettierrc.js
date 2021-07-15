'use strict'

require('ts-node').register({compilerOptions: {module: 'commonjs'}})

module.exports = require('./format/index.ts').default
