'use strict'

module.exports = {
  'valid-jsdoc': [true, {
    matchDescription: '.+',
    requireParamDescription: true,
    // handled by typescript
    requireParamType: false,
    // handled by typescript
    requireReturn: false,
    requireReturnDescription: true,
    // handled by typescript
    requireReturnType: false,
  }],
}
