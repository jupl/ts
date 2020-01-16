'use strict'

module.exports = {
  allRules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {format: ['strictCamelCase', 'UPPER_CASE'], selector: 'variableLike'},
      {format: ['strictCamelCase'], selector: 'memberLike'},
      {format: ['StrictPascalCase'], selector: 'typeLike'},
    ],
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extraneous-class': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-parameter-properties': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {allowTaggedTemplates: true},
    ],
    '@typescript-eslint/no-unused-vars-experimental': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': [
      'error',
      {forceSuggestionFixer: true},
    ],
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {checkCompoundAssignments: true},
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {allowBoolean: true, allowNumber: true},
    ],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/strict-boolean-expressions': [
      'error',
      {allowNullable: true, allowSafe: true},
    ],
    '@typescript-eslint/unified-signatures': 'error',
  },
  tsRules: {
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {accessibility: 'no-public'},
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-var-requires': 'error',
  },
}
