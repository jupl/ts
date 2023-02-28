import {moduleConfiguration} from '../util'

/**
 * JSDoc related configuration.
 */
export const configuration = moduleConfiguration('eslint-plugin-jsdoc', {
  extends: ['plugin:jsdoc/recommended'],
  rules: {
    'jsdoc/check-alignment': 'off',
    'jsdoc/match-description': ['error', {contexts: ['any']}],
    'jsdoc/newline-after-description': ['error', 'never'],
    'jsdoc/require-description': ['error', {contexts: ['any']}],
    'jsdoc/require-hyphen-before-param-description': ['error', 'never'],
    'jsdoc/require-jsdoc': [
      'error',
      {contexts: ['ExportDefaultDeclaration', 'ExportNamedDeclaration']},
    ],
    'jsdoc/require-returns-type': 'off',
  },
  settings: {
    jsdoc: {tagNamePreference: {returns: 'return'}},
  },
  tsRules: {
    'jsdoc/no-types': 'error',
    'jsdoc/require-param-type': 'off',
  },
  vanillaRules: {
    'jsdoc/require-jsdoc': 'off',
  },
})
