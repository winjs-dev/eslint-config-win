module.exports = {
  rules: {
    // 禁止出现for无限循环
    'for-direction': 'error',

    //  get语法必须return语句
    'getter-return': ['error', { allowImplicit: true }],

    //  禁止将 async 函数做为 new Promise 的回调函数
    'no-async-promise-executor': 'error',

    //  禁止将 await 写在循环里
    'no-await-in-loop': 'error',

    // 禁止与负零进行比较
    'no-compare-neg-zero': 'error',

    // 禁止在判断表达式中使用赋值语句
    'no-cond-assign': ['error', 'always'],

    // 禁止使用 console
    'no-console': 'off',

    // 禁止将常量作为分支条件判断中的判断表达式
    'no-constant-condition': 'off',

    // 禁止在正则表达式中出现 Ctrl 键的 ASCII 表示
    'no-control-regex': 'error',

    // 禁止使用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // 禁止在函数参数中出现重复名称的参数
    'no-dupe-args': 'error',

    //  禁止在对象字面量中出现重复名称的键名
    'no-dupe-else-if': 'off',

    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 'error',

    // 禁止在 switch 语句中出现重复测试表达式的 case
    'no-duplicate-case': 'error',

    // 禁止出现空代码块，允许 catch 为空代码块
    'no-empty':  ['error', { allowEmptyCatch: true }],

    // 禁止在正则表达式中使用空的字符集
    'no-empty-character-class': 'error',

    // 禁止将 catch 的第一个参数 error 重新赋值
    'no-ex-assign': 'error',

    // 禁止不必要的布尔类型转换
    'no-extra-boolean-cast': 'off',

    // 禁止函数表达式中出现多余的括号
    // https://eslint.org/docs/rules/no-extra-parens
    'no-extra-parens': 'off',

    //  禁止出现多余的分号
    'no-extra-semi': 'error',

    //  禁止将一个函数声明重新赋值
    'no-func-assign': 'error',

    //   禁止将import的值重新赋值
    'no-import-assign': 'off',

    // 禁止在 if 代码块内出现函数声明
    'no-inner-declarations': 'error',

    // 禁止在 RegExp 构造函数中出现非法的正则表达式
    'no-invalid-regexp': 'error',

    // 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
    'no-irregular-whitespace': ['error',  {
      skipStrings: true,
      skipComments: false,
      skipRegExps: true,
      skipTemplates: true
    }],

    //  禁止丢失精度的数字文字
    'no-loss-of-precision': 'off',

    // 禁止正则表达式中使用肉眼无法区分的特殊字符
    'no-misleading-character-class': 'error',

    // 禁止将 Math, JSON 或 Reflect 直接作为函数调用
    'no-obj-calls': 'error',

    //  禁止从Promise执行器函数返回值
    'no-promise-executor-return': 'off',

    //  禁止使用 hasOwnProperty, isPrototypeOf 或 propertyIsEnumerable
    'no-prototype-builtins': 'off',

    // 禁止在正则表达式中出现连续的空格
    'no-regex-spaces': 'error',

    //  禁止setter函数有返回值
    'no-setter-return': 'off',

    // 禁止在数组中出现连续的逗号
    'no-sparse-arrays': 'error',

    //  禁止在普通字符串中出现模版字符串里的变量形式
    'no-template-curly-in-string': 'error',

    //  禁止出现难以理解的多行表达式
    'no-unexpected-multiline': 'error',

    // 禁止在 return, throw, break 或 continue 之后还有代码
    'no-unreachable': 'error',

    // 禁止仅允许一次迭代的主体进行循环
    'no-unreachable-loop': 'off',

    // 禁止在 finally 中出现 return, throw, break 或 continue
    'no-unsafe-finally': 'error',

    // 禁止在 in 或 instanceof 操作符的左侧使用感叹号
    'no-unsafe-negation': 'error',

    //  在正则表达式中禁止无用的反向引用
    'no-useless-backreference': 'off',

    // 不允许在in表达式中取反左操作数（兼容存在）
    'no-negated-in-lhs': 'error',

    // 禁止将 await 或 yield 的结果做为运算符的后面项
    'require-atomic-updates': 'off',

    // 必须使用 isNaN(foo) 而不是 foo === NaN
    'use-isnan': 'error',

    // 强制执行有效的JSDoc注释
    'valid-jsdoc': 'off',

    // typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function' 或 'symbol'
    'valid-typeof': ['error', { requireStringLiterals: true }],
  }
};
