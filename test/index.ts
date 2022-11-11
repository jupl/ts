import {join} from 'path'
import type {Config} from '@jest/types'
import {defaults} from 'ts-jest/presets'
import {canRequire} from '../util'

const babelConfig = canRequire('babel-plugin-dynamic-import-node')
  ? {plugins: ['dynamic-import-node']}
  : false

const configuration: Config.InitialOptions = {
  ...defaults,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        babelConfig,
        isolatedModules: true,
        tsconfig: join(__dirname, '../config/node.json'),
      },
    ],
  },
}

/**
 * Jest configuration.
 * @type {import('@jest/types').Config.InitialOptions}
 */
// eslint-disable-next-line import/no-default-export
export default configuration
