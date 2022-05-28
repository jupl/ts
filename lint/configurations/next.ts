import {moduleConfiguration} from '../util'

/**
 * Next.js related configuration.
 */
export const configuration = moduleConfiguration('@next/eslint-plugin-next', {
  extends: ['plugin:@next/next/recommended'],
})
