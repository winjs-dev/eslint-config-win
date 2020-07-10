module.exports = {
  extends: [
    './rules/style',
    './rules/best-practices',
    './rules/es6.js',
    './rules/grammer-error.js',
    './rules/strict.js',
    './rules/style.js',
    './rules/variables.js'
  ].map(require, resolve),
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
  },
  rules: {}
}
