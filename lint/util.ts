import {canRequire} from '../util'
import type {Configuration} from './types'

/**
 * Provide valid configuration assuming packages are available.
 * @param path Package path(s) to check for
 * @param configuration Configuration if packages are available
 * @return Configuration if packages are available, or otherwise empty
 */
export const moduleConfiguration = (
  path: string | string[],
  configuration: Configuration,
): Configuration => {
  const packages = Array.isArray(path) ? path : [path]
  return packages.every(canRequire) ? configuration : {}
}

/**
 * Merge configurations, overwriting or appending where applicable.
 * @param configurations List of configurations to combine
 * @return Merged configuration
 */
export const mergeConfigurations = (configurations: Configuration[]) =>
  configurations.reduce<Configuration>(
    (
      configuration,
      {
        extends: xtends,
        jsRules,
        parser,
        parserOptions,
        plugins,
        rules,
        settings,
        tsRules,
        vanillaRules,
      },
    ) => ({
      extends: [...(configuration.extends ?? []), ...(xtends ?? [])],
      jsRules: {...configuration.jsRules, ...jsRules},
      parser: parser ?? configuration.parser,
      parserOptions: {...configuration.parserOptions, ...parserOptions},
      plugins: [...(configuration.plugins ?? []), ...(plugins ?? [])],
      rules: {...configuration.rules, ...rules},
      settings: {...configuration.settings, ...settings},
      tsRules: {...configuration.tsRules, ...tsRules},
      vanillaRules: {...configuration.vanillaRules, ...vanillaRules},
    }),
    {},
  )
