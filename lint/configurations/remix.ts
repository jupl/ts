import {moduleConfiguration} from '../util'

/**
 * Remix related configuration.
 */
export const configuration = moduleConfiguration('@remix-run/eslint-config', {
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
})
