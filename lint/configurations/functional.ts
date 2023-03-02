import {moduleConfiguration} from '../util'

/**
 * Functional related configuration.
 */
export const configuration = moduleConfiguration('eslint-plugin-functional', {
  plugins: ['functional'],
  rules: {
    'functional/immutable-data': [
      'error',
      {
        ignoreAccessorPattern: [
          'module.exports',
          'this',
          'exports.*',
          'process.**',
          '*Ref.current',
        ],
        ignoreImmediateMutation: true,
      },
    ],
  },
})
