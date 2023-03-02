import {moduleConfiguration} from '../util'

/**
 * SonarJS related configuration.
 */
export const configuration = moduleConfiguration('eslint-plugin-sonarjs', {
  extends: ['plugin:sonarjs/recommended'],
  rules: {
    'sonarjs/no-duplicate-string': ['error', 10],
    'sonarjs/prefer-while': 'off',
  },
})
