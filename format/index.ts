import type {Options} from 'prettier'

const options: Options = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: false,
  endOfLine: 'lf',
  printWidth: 79,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
}

/**
 * Finalized Prettier options.
 */
// eslint-disable-next-line import/no-default-export
export default options
