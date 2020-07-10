const confusingBrowserGlobals = require('confusing-browser-globals');
/**
 * 对于变量模块的格式要求
 * @type {{rules: {}}}
 */
module.exports = {
  rules: {
    // 强制执行或消除声明期间的变量初始化
    'init-declarations': 'off',

    //  禁止变量与catch子句参数具有相同的名称
    'no-catch-shadow': 'always',

    // 不允许在变量上使用delete操作符
    'no-delete-var': 'error',

    //  不允许创建与作用域内同名的标签名
    'no-label-var': 'error',

    // 指定不希望在应用程序中使用的全局变量名称
    'no-restricted-globals': ['error', 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),

    // 消除阴影变量声明
    'no-shadow': 'error',

    //  不允许将全局对象喝严格限制模式标识符作为变量名称
    'no-shadow-restricted-names': 'error',

    // 禁止意外创建的全局变量或使用 /*global xxx:true*/ 注释
    'no-undef': 'error',

    // 禁止显示定义undefined，如果需要，单行注释取消该规则
    'no-undef-init': 'error',

    //  消除显示使用undefined
    'no-undefined': 'off',

    // 消除未使用的变量，函数和函数的参数，只对最后一个参数进行校验
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],

    // 强制先声明再使用变量
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  }
};
