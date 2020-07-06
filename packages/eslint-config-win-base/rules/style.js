/**
 * 代码格式规则合集
 * @type {{rules: {}}}
 */
module.exports = {
  rules: {
    //  打开和关闭数组括号之前强制换行、
    'array-bracket-newline': ['off'],

    //  数组元素之间的强制换行
    'array-element-newline': ['off'],

    //  数组括号内强制实现一致的间距
    'array-bracket-spacing': ['error', 'never'],

    //  同一行中的关闭块标记和以前的标记内强制实施一致的间距
    'block-spacing': ['error', 'always'],

    //  强制在代码块中使用一致的大括号风格
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    //  变量命名是否为驼峰
    camelcase: ['error', { properties: 'always' }],

    //  注释开头大小写字母
    'capitalized-comments': ['off'],

    //  禁止或强制末尾逗号
    'comma-dangle': ['error', 'never'],

    //  强制定义变量后，逗号放置位置
    'comma-style': ['error', 'last', {
      exceptions: {
        ArrayExpression: false,
        ArrayPattern: false,
        ArrowFunctionExpression: false,
        CallExpression: false,
        FunctionDeclaration: false,
        FunctionExpression: false,
        ImportDeclaration: false,
        ObjectExpression: false,
        ObjectPattern: false,
        VariableDeclaration: false,
        NewExpression: false,
      }
    }],

    //  强制取消计算属性内的空格
    'computed-property-spacing': ['error', 'never'],

    //  this变量重命名
    'consistent-this': 'off',

    //  函数调用参数强制换行
    'function-call-argument-newline': ['off'],

    //  调用函数时，不允许函数名与括号之间有空格
    'func-call-spacing': ['error', 'never'],

    //  命名函数与它们分配的变量或属性是否可具有不同的名称
    'func-name-matching': ['off'],

    //  函数表达式是否可以匿名
    'func-names': ['warning', 'as-needed'],

    //  函数声明样式
    'func-style': ['off'],

    //  定义函数参数时换行
    'function-paren-newline': ['error', 'consistent'],

    //  定义固定的参数保留字
    'id-blacklist': 'off',

    //  定义变量长度
    'id-length': 'off',

    //  定义变量格式,强制驼峰
    'id-match': ["error", "^[a-z]+([A-Z][a-z]+)*$", { "properties": true }],

    // 包含隐式返回的箭头函数强制实施一致的位置
    'implicit-arrow-linebreak': ['error', 'beside'],

    //  缩进空格数
    indent: ['error', 2],

    //  强制在 JSX 属性中一致使用双引号或单引号
    'jsx-quotes': ['off'],

    // 定义对象冒号前无空格，冒号后有空格
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],

    // 关键字前后有空格
    'keyword-spacing': ['error', {
      before: true,
      after: true
    }],

    //  代码注释位置
    'line-comment-position': ['off'],

    // 统一的行结尾
    'linebreak-style': ['error', 'unix'],

    // 类成员之间强制空格
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],

    // 在评论之前和之后需要空行
    'lines-around-comment': 'off',

    // 指令序言前后必须有空白换行符
    'lines-around-directive': ['error', {
      before: 'always',
      after: 'always',
    }],

    // 强制执行嵌套块的最大深度
    'max-depth': ['off'],

    // 每行最多100个字符，制表符长度为2
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    //  每个文件最多行数
    'max-lines': ['off'],

    //  每个方法最多行数
    'max-lines-per-function': ['off'],

    // 执行最大深度
    'max-nested-callbacks': 'off',

    // 参数数量
    'max-params': ['off'],

    // 指定函数中允许的最大语句数
    'max-statements': ['off'],

    // 每行允许的最大语句数
    'max-statements-per-line': ['off', { max: 1 }],

    // 多行评论的特定风格
    'multiline-comment-style': ['off'],

    //  强制或禁止三元表达式的操作数之间的换行符
    'multiline-ternary': ['off'],

    //  要求构造函数名以大写字母开头
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    }],

    // 使用new关键字调用不带参数的构造函数时需要括号
    'new-parens': 'error',

    //  声明变量后是否需要空格
    'newline-after-var': 'off',

    // return前是否需要空格
    'newline-before-return': 'off',

    // 每次调用方法链或深入成员访问后都需要换行符，做多链式调用4个
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],

    // 不允许使用Array构造函数
    'no-array-constructor': 'error',

    // 此规则不允许按位运算符
    'no-bitwise': 'off',

    //  不允许continue语句
    'no-continue': 'off',

    // 此规则不允许与代码在同一行上写注释
    'no-inline-comments': 'off',

    // 不允许将if语句作为else块中的唯一语句。
    'no-lonely-if': 'error',

    // 不允许使用混合空格和制表符进行缩进
    'no-mixed-spaces-and-tabs': 'error',

    // 不允许在单个语句中使用多个赋值
    'no-multi-assign': ['error'],

    // 最大空行数量
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],

    // 不允许if有else分支的报表，三元表达式的否定条件
    'no-negated-condition': 'error',

    // 不允许嵌套的三元表达式
    'no-nested-ternary': 'error',

    // 不允许使用Object构造函数
    'no-new-object': 'error',

    //  允许++和--
    'no-plusplus': 'off',

    // 不允许用户自定义语法
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'ForOfStatement',
        message: 'iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    // 不允许功能标识符与其应用程序之间的间距
    'no-spaced-func': 'error',

    // 不允许显示使用制表符
    'no-tabs': 'error',

    // 不允许三元运算符
    'no-ternary': 'off',

    // 不允许在空行上尾随空格
    'no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],

    // 不允许在标识符中使用悬空下划线
    'no-underscore-dangle': ['error', {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    }],

    //  当存在更简单的选择时，此规则不允许三元运算符
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],

    // 如果对象的属性位于同一行上，则不允许围绕点或在开头括号之前留出空白
    'no-whitespace-before-property': 'error',

    // 强化单线报表的统一位置，在单行语句之前不允许换行。
    'nonblock-statement-body-position': ['error', 'beside', { overrides: {} }],

    // 在对象文字的大括号内执行一致的间距
    'object-curly-spacing': ['error', 'always'],

    // 在对象文字或解构赋值的大括号内强制执行一致的换行符
    'object-curly-newline': ['error', {
      ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
      ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
      ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
      ExportDeclaration: { minProperties: 4, multiline: true, consistent: true },
    }],

    // 禁止任何属性规范的任何部分与任何其他属性规范的任何部分出现在同一行上
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],

    // 函数中分别声明该变量
    'one-var': ['error', 'never'],

    // 变量声明周围执行一致的换行符
    'one-var-declaration-per-line': ['error', 'always'],

    // 在可能的情况下需要赋值运算符速记
    'operator-assignment': ['error', 'always'],

    // 运算符不能在行开头
    'operator-linebreak': ['error', 'before', { overrides: { '=': 'none' } }],

    // 在块内开头或结尾不允许出现空行
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }, {
      allowSingleLineBlocks: true,
    }],

    //  去除不必要的引号
    'quote-props': ['error', 'as-needed', { keywords: false, unnecessary: true, numbers: false }],

    // 尽可能要求使用单引号
    quotes: ['error', 'single', { avoidEscape: true }],

    // 结尾必须带分号
    semi: ['error', 'always'],

    // 分号间隔
    'semi-spacing': ['error', { before: false, after: true }],

    // 强制分号位于语句的末尾
    'semi-style': ['error', 'last'],

    // 块之前的间距一致性
    'space-before-blocks': 'error',

    // 强化块之前的间距一致性
    'space-before-function-paren': ['error', 'never'],

    // 在圆括号内强制使用零空格
    'space-in-parens': ['error', 'never'],

    // 运算符与运算数之间有空格
    'space-infix-ops': 'error',

    // 一元运算符空格
    'space-unary-ops': ['error', {
      words: true,
      nonwords: false
    }],

    //  case子句空格问题
    'switch-colon-spacing': ['error', { after: true, before: false }],

    // Require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    'template-tag-spacing': ['error', 'never'],

    // 禁止标记函数和其模板文字之间的空格
    'unicode-bom': ['error', 'never']
  }
}
