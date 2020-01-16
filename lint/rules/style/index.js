'use strict'

module.exports = {
  allRules: {
    'capitalized-comments': 'error',
    'consistent-this': ['error', 'self'],
    'func-style': ['error', 'declaration', {allowArrowFunctions: true}],
    'max-len': ['error', 79],
    'max-lines': ['error', 400],
    'max-lines-per-function': ['error', 200],
    'no-array-constructor': 'error',
    'no-continue': 'error',
    'no-lonely-if': 'error',
    'no-multi-assign': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
    'one-var': ['error', 'never'],
    'operator-assignment': ['error', 'always'],
    'prefer-exponentiation-operator': 'error',
    'sort-keys': 'error',
  },
}
