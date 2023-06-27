module.exports = {
  extends: ['../base/.eslintrc.js'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 设置 js 的解析器为 @babel/eslint-parser
    // https://github.com/mysticatea/vue-eslint-parser#-options
    parser: '@babel/eslint-parser',
    // FIXME
    // ESLint: Parsing error: This experimental syntax requires enabling one of the following parser plugin(s): "jsx", "flow", "typescript".
    // details: https://github.com/babel/babel/issues/14546
    babelOptions: {
      parserOpts: {
        plugins: ['jsx'],
      },
    },
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true,
    },
    // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false,
  },
  plugins: ['vue'],
};
