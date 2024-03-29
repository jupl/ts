import type {Configuration} from '../types'

/**
 * Variables related configuration.
 */
export const configuration: Configuration = {
  rules: {
    'no-label-var': 'error',
    // Encourage use of @jest/globals
    'no-restricted-globals': [
      'error',
      'jest',
      'expect',
      'it',
      'test',
      'fit',
      'xit',
      'xtest',
      'describe',
      'xdescribe',
      'fdescribe',
      'beforeAll',
      'beforeEach',
      'afterEach',
      'afterAll',
    ],
    'no-undef-init': 'error',
  },
}
