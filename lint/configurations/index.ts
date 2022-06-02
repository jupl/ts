import {mergeConfigurations} from '../util'
import {configuration as bestPractices} from './best-practices'
import {configuration as errors} from './errors'
import {configuration as esnext} from './esnext'
import {configuration as functional} from './functional'
import {configuration as imprt} from './import'
import {configuration as jsdoc} from './jsdoc'
import {configuration as next} from './next'
import {configuration as node} from './node'
import {configuration as prettier} from './prettier'
import {configuration as react} from './react'
import {configuration as remix} from './remix'
import {configuration as sonar} from './sonar'
import {configuration as style} from './style'
import {configuration as typescript} from './typescript'
import {configuration as variables} from './variables'

/**
 * Combined configuration rules.
 */
export const configuration = mergeConfigurations([
  next,
  remix,
  bestPractices,
  errors,
  esnext,
  functional,
  imprt,
  jsdoc,
  node,
  react,
  sonar,
  style,
  typescript,
  variables,
  prettier,
])
