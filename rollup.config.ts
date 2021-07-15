import typescript from '@rollup/plugin-typescript'
import type {RollupOptions} from 'rollup'

const plugins = [typescript({sourceMap: false})]

const options: RollupOptions[] = [
  {
    input: 'format/index.ts',
    output: {
      exports: 'default',
      file: 'format/index.js',
      format: 'cjs',
    },
    plugins,
  },
  {
    external: ['path'],
    input: 'lint/index.ts',
    output: {
      exports: 'default',
      file: 'lint/index.js',
      format: 'cjs',
    },
    plugins,
  },
  {
    external: ['path', 'ts-jest/presets'],
    input: 'test/index.ts',
    output: {
      exports: 'default',
      file: 'test/index.js',
      format: 'cjs',
    },
    plugins,
  },
]

/**
 * Rollup build configuration.
 */
// eslint-disable-next-line import/no-default-export
export default options
