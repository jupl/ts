import {resolve} from 'path'
import {mergeConfigurations, moduleConfiguration} from '../util'

/**
 * TypeScript related configuration.
 */
export const configuration = mergeConfigurations([
  moduleConfiguration(['@typescript-eslint/parser', 'typescript'], {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2021,
      project: [resolve('tsconfig.json')],
    },
  }),
  moduleConfiguration(['@typescript-eslint/eslint-plugin', 'typescript'], {
    extends: [
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    jsRules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
    },
    rules: {
      '@typescript-eslint/array-type': 'error',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/consistent-type-imports': 'off',
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          selector: 'variableLike',
        },
        {format: ['PascalCase'], selector: 'typeLike'},
      ],
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-empty-interface': [
        'error',
        {allowSingleExtends: true},
      ],
      '@typescript-eslint/no-extra-non-null-assertion': 'error',
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-implied-eval': 'error',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {checksVoidReturn: false},
      ],
      '@typescript-eslint/no-parameter-properties': 'off',
      '@typescript-eslint/no-throw-literal': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      '@typescript-eslint/no-unnecessary-type-arguments': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {allowTaggedTemplates: true},
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
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
        {allowAny: true, allowNumber: false, allowString: false},
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
      // Turn off to avoid conflict with @typescript-eslint
      'no-useless-constructor': 'off',
    },
  }),
])
