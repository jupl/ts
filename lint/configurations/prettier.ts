import options from '../../format'
import {moduleConfiguration} from '../util'

/**
 * Prettier related configuration.
 */
export const configuration = moduleConfiguration(
  ['eslint-config-prettier', 'eslint-plugin-prettier', 'prettier'],
  {
    extends: ['plugin:prettier/recommended'],
    rules: {
      'prettier/prettier': ['error', options, {usePrettierrc: false}],
    },
  },
)
