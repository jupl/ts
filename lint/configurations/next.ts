import {moduleConfiguration} from '../util'

/**
 * Next.js related configuration.
 */
export const configuration = moduleConfiguration('eslint-plugin-next', {
  extends: ['next/core-web-vitals'],
})
