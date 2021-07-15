import {moduleConfiguration} from '../util'

/**
 * Prettier related configuration.
 */
export const configuration = moduleConfiguration(
  ['eslint-config-prettier', 'eslint-plugin-prettier'],
  {extends: ['plugin:prettier/recommended']},
)
