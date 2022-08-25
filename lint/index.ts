import type {Linter} from 'eslint'
import {configuration as config} from './configurations'

const configuration: Linter.Config = {
  env: {browser: true, node: true},
  extends: ['eslint:recommended', ...(config.extends ?? [])],
  overrides: [
    {files: ['*.js', '*.jsx'], rules: config.jsRules},
    {files: ['*.ts', '*.tsx'], rules: config.tsRules},
  ],
  parser: config.parser,
  parserOptions: {sourceType: 'module', ...config.parserOptions},
  plugins: config.plugins,
  root: true,
  rules: config.rules,
  settings: config.settings,
}

/**
 * Finalized ESLint configuration.
 * @type {import('eslint').Linter.Config}
 */
// eslint-disable-next-line import/no-default-export
export default configuration
