module.exports = {
  coverageDirectory: '<rootDir>/.coverage',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/config/node.json',
    },
  },
  preset: 'ts-jest',
}
