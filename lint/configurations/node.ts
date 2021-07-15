import type {Configuration} from '../types'

/**
 * Node related configuration.
 */
export const configuration: Configuration = {
  jsRules: {
    'global-require': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
  },
  rules: {
    'no-buffer-constructor': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-sync': 'error',
  },
}
