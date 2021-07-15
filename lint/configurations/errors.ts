import type {Configuration} from '../types'

/**
 * Errors related configuration.
 */
export const configuration: Configuration = {
  jsRules: {
    'no-import-assign': 'error',
    'no-setter-return': 'error',
  },
  rules: {
    'no-await-in-loop': 'error',
    'no-dupe-else-if': 'error',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'error',
  },
}
