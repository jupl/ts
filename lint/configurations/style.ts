import type {Configuration} from '../types'

/**
 * Style related configuration.
 */
export const configuration: Configuration = {
  rules: {
    'capitalized-comments': [
      'error',
      'always',
      {ignoreConsecutiveComments: true},
    ],
    'consistent-this': ['error', 'self'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'max-lines': ['error', 500],
    'max-lines-per-function': ['error', 300],
    'no-array-constructor': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'no-restricted-syntax': ['error', 'FunctionDeclaration[generator=false]'],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'sort-keys': 'error',
  },
}
