import type {Options} from 'prettier'

const options: Options = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  endOfLine: 'lf',
  jsxBracketSameLine: false,
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
