import type {Linter} from 'eslint'

type BaseKeys = 'parser' | 'parserOptions' | 'plugins' | 'rules' | 'settings'

/** Custom configuration rules typing. */
export interface Configuration extends Pick<Linter.BaseConfig, BaseKeys> {
  extends?: string[]
  jsRules?: Record<string, Linter.RuleEntry>
  tsRules?: Record<string, Linter.RuleEntry>
}
