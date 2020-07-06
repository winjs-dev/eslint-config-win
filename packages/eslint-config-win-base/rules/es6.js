/**
 * es6语法相关配置
 */
module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false
    }
  },

  rules: {
    //  箭头函数必须包含大括号
    'arrow-body-style': ['error', 'always'],

    //  箭头函数参数周围必须加入大括号
    'arrow-parens': ['error', 'always'],

    // 箭头函数箭头前后必须含有空格
    'arrow-spacing': ['error', { before: true, after: true }],

    // verify super() callings in constructors
    'constructor-super': 'error',

    //  强制消除无用的super()调用，或缺少的super调用
    'generator-star-spacing': ['error', { before: false, after: true }],

    //  禁止修改class变量
    'no-class-assign': 'error',

    // 禁止在使用比较运算符的时候使用箭头函数，可以用（）作为混淆方式
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],

    // 不允许修改const定义变量
    'no-const-assign': 'error',

    // 不允许重复名称
    'no-dupe-class-members': 'error',

    // symbol（）不能和new连用
    'no-new-symbol': 'error',

    // 不允许this.super()
    'no-this-before-super': 'error',

    // 禁止不必要地使用计算属性键
    'no-useless-computed-key': 'error',

    // 禁止没用的构造函数
    'no-useless-constructor': 'error',

    // 不允许将导入、导出和解构分配重命名为相同的名称
    'no-useless-rename': ['error', {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    }],

    // 不允许使用var
    'no-var': 'error',

    // 强制使用简写语法
    'object-shorthand': ['error', 'always', {
      ignoreConstructors: false,
      avoidQuotes: true,
    }],

    // 尽量使用箭头函数
    'prefer-arrow-callback': ['error', {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    }],

    // 多使用const
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    }],

    // 多使用结构
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: false,
      },
    }, {
      enforceForRenamedProperties: false,
    }],

    // 禁止调用parseInt()或Number.parseInt()使用两个参数调用
    'prefer-numeric-literals': 'error',

    // 多使用rest参数
    'prefer-rest-params': 'error',

    // apply中使用展开运算符
    'prefer-spread': 'error',

    // 尽量使用模板字符串
    'prefer-template': 'error',

    // generator必须有yield
    'require-yield': 'error',

    // 扩展运算符及其表达式之间不允许有空格
    'rest-spread-spacing': ['error', 'never'],

    // Symbol创建时传值
    'symbol-description': 'error',

    // 保持模板文字内部空间的一致性
    'template-curly-spacing': 'error',

    // generator * 前无空格，后有空格
    'yield-star-spacing': ['error', 'after']
  }
};
