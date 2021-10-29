/**
 * winner-fed 前端编码规范文档
 * https://github.com/cloud-templates/eslint-config-win#readme
 *
 * 贡献者：
 *   winner-fed
 *
 * 依赖版本：
 *   eslint ^7.32.0
 *   @babel/eslint-parser ^7.15.8
 *   vue-eslint-parser ^7.11.0
 *   eslint-plugin-vue ^7.20.0
 *   @typescript-eslint/parser ^5.0.0
 *   @typescript-eslint/eslint-plugin ^5.0.0
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 */
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    // 设置 js 的解析器为 @babel/eslint-parser
    // https://github.com/vuejs/vue-eslint-parser#-options
    parser: '@babel/eslint-parser',
    ecmaVersion: 2019,
    // ECMAScript modules 模式
    sourceType: 'module',
    ecmaFeatures: {
      // 不允许 return 语句出现在 global 环境下
      globalReturn: false,
      // 开启全局 script 模式
      impliedStrict: true,
      jsx: true
    },
    // 即使没有 babelrc 配置文件，也使用 @babel/eslint-parser 来解析
    requireConfigFile: false,
    // 仅允许 import export 语句出现在模块的顶层
    allowImportExportEverywhere: false
  },
  plugins: ['vue']
};
