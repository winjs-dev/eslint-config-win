/**
 * 对于一些语法无问题，但是背离api的使用的规则
 */
module.exports = {
  rules: {
    // 减少绑定上下文之外的变量的使用
    'block-scoped-var': 'error',

    // 标记不使用的类方法this
    'class-methods-use-this': ['error'],

    // 不允许方法出现不return的情况
    'consistent-return': 'error',

    // 确保将块语句包装在花括号中
    curly: ['error', 'multi-line'], // multiline

    // case子句必须带有default
    'default-case': ['error', { commentPattern: '^no default$' }],

    // 尽可能使用点符号样式来维护代码一致性
    'dot-notation': ['error', { allowKeywords: true }],

    // 点操作符不能开头
    'dot-location': ['error', 'property'],

    // 使用全等
    eqeqeq: ['error', 'always', { null: 'ignore' }],

    // 防止使用for in循环而不过滤循环中的结果时可能出现的意外行为
    'guard-for-in': 'error',

    // 每个文件最多出现1个class
    'max-classes-per-file': ['error', 1],

    // 不适用alert
    'no-alert': 'warn',

    // 不允许使用arguments.caller和arguments.callee
    'no-caller': 'error',

    // 不允许case子句无大括号包裹
    'no-case-declarations': 'error',

    // if包含 return 语句后的不必要代码块，禁止返回后的else if块
    'no-else-return': ['error', { allowElseIf: false }],

    // 消除空功能
    'no-empty-function': ['error', {
      allow: [
        'arrowFunctions',
        'functions',
        'methods',
      ]
    }],

    // 禁止解构结构对象和数组中的任何空模式
    'no-empty-pattern': 'error',

    // 禁止出现eval语句
    'no-eval': 'error',

    // 不允许直接修改内建对象的原型
    'no-extend-native': 'error',

    // 禁止额外的bind
    'no-extra-bind': 'error',

    // 消除不必要的标签
    'no-extra-label': 'error',

    // case不允许出现执行多个case情况
    'no-fallthrough': 'error',

    // 小数点前后必须有数字
    'no-floating-decimal': 'error',

    // 不允许修改只读全局变量
    'no-global-assign': ['error', { exceptions: [] }],

    // setTimeout()和setInterval()不允许使用字符串参数
    'no-implied-eval': 'error',

    // 不能使用__iterator__
    'no-iterator': 'error',

    // 不允许使用标签语句
    'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

    // 去除不必要的代码块
    'no-lone-blocks': 'error',

    // 不允许在循环中创建函数
    'no-loop-func': 'error',

    // 不允许使用多个空格
    'no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],

    // 不允许使用多行字符串
    'no-multi-str': 'error',

    // 禁止使用new不将结果对象分配给变量的关键字的构造函数调用
    'no-new': 'error',

    //  不允许使用Function构造函数
    'no-new-func': 'error',

    // 杜绝使用String，Number以及Boolean与new操作
    'no-new-wrappers': 'error',

    // 不允许使用八进制文字
    'no-octal': 'error',

    // 不允许字符串文字中的八进制转义序列;
    'no-octal-escape': 'error',

    // 不允许修改参数赋值
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'e' // for e.returnvalue
      ]
    }],

    // 不允许使用__proto__
    'no-proto': 'error',

    // 消除在同一范围内具有多个声明的变量
    'no-redeclare': 'error',

    //  在给定对象名称上访问给定属性键时，可以在读取属性值或将其作为函数调用时使用
    'no-restricted-properties': ['error', {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    }, {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    }, {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    }, {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    }, {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    }],

    // return语句不允许赋值
    'no-return-assign': ['error', 'always'],

    // return语句不能有await
    'no-return-await': 'error',

    // url不允许赋值为javascript：xxx
    'no-script-url': 'error',

    // 不允许自己赋值给自己
    'no-self-assign': ['error', {
      props: true,
    }],

    // 不允许自身比较
    'no-self-compare': 'error',

    // 不允许使用逗号运算符
    'no-sequences': 'error',

    // throw后必须接Error对象
    'no-throw-literal': 'error',

    // 消除对程序状态没有影响的未使用的表达式
    'no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],

    // 消除未使用的标签
    'no-unused-labels': 'error',

    // 不允许当字符串+可以合并成一个文字时
    'no-useless-concat': 'error',

    // 消除无用的转义
    'no-useless-escape': 'error',

    // 消除无用的return
    'no-useless-return': 'error',

    // 不允许使用with
    'no-with': 'error',

    //  promise只被error对象reject
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

    // 防止意外地将字符串转换为与预期不同的基数
    radix: 'error',

   // 所有立即调用的函数表达式都包含在圆括号
    'wrap-iife': ['error', 'outside', { functionPrototypeMethods: false }],

    // 强制执行一种将变量与文字值进行比较的一致条件样式
    yoda: 'error'
  }
};
