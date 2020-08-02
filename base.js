/**
 * winner-fed 前端编码规范文档
 * https://github.com/cloud-templates/eslint-config-win#readme
 *
 * 贡献者：
 *     winner-fed
 *
 * 依赖版本：
 *     eslint ^7.3.1
 *     babel-eslint ^10.1.0
 *     vue-eslint-parser ^7.1.0
 *     eslint-plugin-vue ^6.2.2
 *     @typescript-eslint/parser ^3.3.0
 *     @typescript-eslint/eslint-plugin ^3.3.0
 *
 * 此文件是由脚本 scripts/build.ts 自动生成
 *
 * @reason 为什么要开启（关闭）此规则
 */
module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
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
        // 即使没有 babelrc 配置文件，也使用 babel-eslint 来解析
        requireConfigFile: false,
        // 仅允许 import export 语句出现在模块的顶层
        allowImportExportEverywhere: false
    },
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    // 以当前目录为根目录，不再向上查找 .eslintrc.js
    root: true,
    rules: {
        /**
         * setter 必须有对应的 getter，getter 可以没有对应的 setter
         */
        'accessor-pairs': [
            'error',
            {
                setWithoutGet: true,
                getWithoutSet: false
            }
        ],
        /**
         * 不允许数组括号和其他标记之间的空格
         */
        'array-bracket-spacing': ['error', 'never'],
        /**
         * 数组的方法除了 forEach 之外，回调函数必须有返回值
         */
        'array-callback-return': 'error',
        /**
         * 箭头函数的箭头前后需有括号
         */
        'arrow-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        /**
         * 在同一行中的关闭大括号和开始大括号内强制实施一致的间距
         */
        'block-spacing': ['error', 'always'],
        /**
         * 块的左大括号放在同一行及其相应的说明或声明后，可以在同一行
         */
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        /**
         * 不允许结尾存在多余的逗号
         */
        'comma-dangle': [
            'error',
            {
                arrays: 'never',
                objects: 'never',
                imports: 'never',
                exports: 'never',
                functions: 'never'
            }
        ],
        /**
         * 逗号前无空格，后需有空格
         */
        'comma-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        /**
         * 逗号在行尾
         */
        'comma-style': ['error', 'last'],
        /**
         * 禁止函数的循环复杂度超过 20
         * @reason https://en.wikipedia.org/wiki/Cyclomatic_complexity
         */
        complexity: [
            'error',
            {
                max: 20
            }
        ],
        /**
         * 属性括号内强制不允许有空格
         */
        'computed-property-spacing': ['error', 'never'],
        /**
         * constructor 中必须有 super
         */
        'constructor-super': 'error',
        /**
         * 只允许if等其他需要大括号包裹的语句在单行内不需要使用大括号
         */
        curly: ['error', 'multi-line'],
        /**
         * switch 语句中的 default 必须在最后
         */
        'default-case-last': 'error',
        /**
         * 不允许点操作符和后面的属性换行显示
         */
        'dot-location': ['error', 'property'],
        /**
         * 强制文件结尾有一个空行
         */
        'eol-last': 'error',
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=
         */
        eqeqeq: ['error', 'always'],
        /**
         * 禁止方向错误的 for 循环
         */
        'for-direction': 'error',
        /**
         * 强制函数名和括号左侧有一个空格
         */
        'func-call-spacing': ['error', 'always'],
        /**
         * 函数赋值给变量的时候，函数名必须与变量名一致
         */
        'func-name-matching': [
            'error',
            'always',
            {
                includeCommonJSModuleExports: false
            }
        ],
        /**
         * generator函数星号和function无空格，和函数名有空格
         */
        'generator-star-spacing': [
            'error',
            {
                before: false,
                after: true
            }
        ],
        /**
         * getter 必须有返回值，并且禁止返回空
         */
        'getter-return': 'error',
        /**
         * setter 和 getter 必须写在一起
         */
        'grouped-accessor-pairs': 'error',
        /**
         * for in 内部必须有 hasOwnProperty
         */
        'guard-for-in': 'error',
        /**
         * 声明对象时，冒号前无空格，冒号后有空格
         */
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        /**
         * 关键字前后都要有空格
         */
        'keyword-spacing': [
            'error',
            {
                before: true,
                after: true
            }
        ],
        /**
         * 类的成员之间需要空行，如果写在同一行跳过空行检查
         */
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true
            }
        ],
        /**
         * 代码块嵌套的深度禁止超过 5 层
         */
        'max-depth': ['error', 5],
        /**
         * 回调函数嵌套禁止超过 3 层，多了请用 async await 替代
         */
        'max-nested-callbacks': ['error', 3],
        /**
         * 函数的参数禁止超过 3 个
         */
        'max-params': ['error', 3],
        /**
         * new 后面的类名必须首字母大写
         */
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: false,
                properties: true
            }
        ],
        /**
         * new 后面的构造器不允许省略括号
         */
        'new-parens': 'error',
        /**
         * 禁止使用 Array 构造函数时传入的参数超过一个
         * @reason 参数为一个时表示创建一个指定长度的数组，比较常用
         * 参数为多个时表示创建一个指定内容的数组，此时可以用数组字面量实现，不必使用构造函数
         */
        'no-array-constructor': 'error',
        /**
         * 禁止将 async 函数做为 new Promise 的回调函数
         * @reason 出现这种情况时，一般不需要使用 new Promise 实现异步了
         */
        'no-async-promise-executor': 'error',
        /**
         * 禁止使用 caller 或 callee
         * @reason 它们是已废弃的语法
         */
        'no-caller': 'error',
        /**
         * switch 的 case 内有变量定义的时候，必须使用大括号将 case 内变成一个代码块
         */
        'no-case-declarations': 'error',
        /**
         * 禁止对已定义的 class 重新赋值
         */
        'no-class-assign': 'error',
        /**
         * 禁止与负零进行比较
         */
        'no-compare-neg-zero': 'error',
        /**
         * 禁止在if， else if， while等表达式中使用赋值语句，除非这个赋值语句被括号包起来了
         */
        'no-cond-assign': ['error', 'except-parens'],
        /**
         * 禁止对使用 const 定义的常量重新赋值
         */
        'no-const-assign': 'error',
        /**
         * 禁止将常量作为分支条件判断中的测试表达式，但允许作为循环条件判断中的测试表达式
         */
        'no-constant-condition': [
            'error',
            {
                checkLoops: false
            }
        ],
        /**
         * 禁止在构造函数中返回值
         */
        'no-constructor-return': 'error',
        /**
         * 禁止使用 debugger
         */
        'no-debugger': 'error',
        /**
         * 禁止对一个变量使用 delete
         * @reason 编译阶段就会报错了
         */
        'no-delete-var': 'error',
        /**
         * 禁止在函数参数中出现重复名称的参数
         * @reason 编译阶段就会报错了
         */
        'no-dupe-args': 'error',
        /**
         * 禁止重复定义类的成员
         */
        'no-dupe-class-members': 'error',
        /**
         * 禁止 if else 的条件判断中出现重复的条件
         */
        'no-dupe-else-if': 'error',
        /**
         * 禁止在对象字面量中出现重复的键名
         */
        'no-dupe-keys': 'error',
        /**
         * 禁止在 switch 语句中出现重复测试表达式的 case
         */
        'no-duplicate-case': 'error',
        /**
         * 禁止重复导入模块
         */
        'no-duplicate-imports': 'error',
        /**
         * 禁止出现空代码块，允许 catch 为空代码块
         */
        'no-empty': [
            'error',
            {
                allowEmptyCatch: true
            }
        ],
        /**
         * 禁止在正则表达式中使用空的字符集 []
         */
        'no-empty-character-class': 'error',
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        'no-empty-pattern': 'error',
        /**
         * 禁止使用 foo == null，必须使用 foo === null
         */
        'no-eq-null': 'error',
        /**
         * 禁止使用 eval
         */
        'no-eval': 'error',
        /**
         * 禁止将 catch 的第一个参数 error 重新赋值
         */
        'no-ex-assign': 'error',
        /**
         * 禁止修改原生对象
         * @reason 修改原生对象可能会与将来版本的 js 冲突
         */
        'no-extend-native': 'error',
        /**
         * 禁止出现没必要的 bind
         */
        'no-extra-bind': 'error',
        /**
         * 禁止不必要的布尔类型转换
         */
        'no-extra-boolean-cast': 'error',
        /**
         * switch 的 case 内必须有 break, return 或 throw，空的 case 除外
         */
        'no-fallthrough': 'error',
        /**
         * 小数点前后必须有数字
         */
        'no-floating-decimal': 'error',
        /**
         * 禁止将一个函数声明重新赋值
         */
        'no-func-assign': 'error',
        /**
         * 禁止对全局变量赋值
         */
        'no-global-assign': 'error',
        /**
         * 禁止使用 ~+ 等难以理解的类型转换，仅允许使用 !!
         */
        'no-implicit-coercion': [
            'error',
            {
                allow: ['!!']
            }
        ],
        /**
         * 禁止在 setTimeout 或 setInterval 中传入字符串
         */
        'no-implied-eval': 'error',
        /**
         * 禁止对导入的模块进行赋值
         */
        'no-import-assign': 'error',
        /**
         * 禁止在 if 代码块内出现函数声明
         */
        'no-inner-declarations': ['error', 'functions'],
        /**
         * 禁止在 RegExp 构造函数中出现非法的正则表达式
         */
        'no-invalid-regexp': 'error',
        /**
         * 禁止在类之外的地方使用 this
         * @reason 只允许在 class 中使用 this
         */
        'no-invalid-this': 'error',
        /**
         * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式或模版字符串中
         */
        'no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true
            }
        ],
        /**
         * 禁止使用 __iterator__
         * @reason __iterator__ 是一个已废弃的属性
         * 使用 [Symbol.iterator] 替代它
         */
        'no-iterator': 'error',
        /**
         * 禁止使用 label
         */
        'no-labels': 'error',
        /**
         * 禁止使用没必要的 {} 作为代码块
         */
        'no-lone-blocks': 'error',
        /**
         * 禁止使用超出 js 精度范围的数字
         */
        'no-loss-of-precision': 'error',
        /**
         * 禁止正则表达式中使用肉眼无法区分的特殊字符
         * @reason 某些特殊字符很难看出差异，最好不要在正则中使用
         */
        'no-misleading-character-class': 'error',
        /**
         * 不允许用混合空格和制表符表示缩进
         */
        'no-mixed-spaces-and-tabs': 'error',
        /**
         * 禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格。
         */
        'no-multi-spaces': 'error',
        /**
         * 禁止使用 \ 来换行字符串
         */
        'no-multi-str': 'error',
        /**
         * 最大连续空行不准超过1
         */
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
                maxEOF: 1
            }
        ],
        /**
         * 禁止直接 new 一个类而不赋值
         * @reason new 应该作为创建一个类的实例的方法，所以不能不赋值
         */
        'no-new': 'error',
        /**
         * 禁止使用 new Function
         * @reason 这和 eval 是等价的
         */
        'no-new-func': 'error',
        /**
         * 禁止直接 new Object
         */
        'no-new-object': 'error',
        /**
         * 禁止使用 new require
         */
        'no-new-require': 'error',
        /**
         * 禁止使用 new 来生成 Symbol
         */
        'no-new-symbol': 'error',
        /**
         * 禁止使用 new 来生成 String, Number 或 Boolean
         */
        'no-new-wrappers': 'error',
        /**
         * 禁止将 Math, JSON 或 Reflect 直接作为函数调用
         */
        'no-obj-calls': 'error',
        /**
         * 禁止使用 0 开头的数字表示八进制数
         * @reason 编译阶段就会报错了
         */
        'no-octal': 'error',
        /**
         * 禁止使用八进制的转义符
         * @reason 编译阶段就会报错了
         */
        'no-octal-escape': 'error',
        /**
         * 禁止对函数的参数重新赋值
         */
        'no-param-reassign': 'error',
        /**
         * 禁止使用 __proto__
         * @reason __proto__ 是已废弃的语法
         */
        'no-proto': 'error',
        /**
         * 禁止重复定义变量
         */
        'no-redeclare': 'error',
        /**
         * 禁止在正则表达式中出现连续的空格
         */
        'no-regex-spaces': 'error',
        /**
         * 禁止在 return 语句里赋值，除非用小括号包裹
         */
        'no-return-assign': ['error', 'except-parens'],
        /**
         * 禁止将自己赋值给自己
         */
        'no-self-assign': 'error',
        /**
         * 禁止将自己与自己比较
         */
        'no-self-compare': 'error',
        /**
         * 禁止使用逗号操作符
         */
        'no-sequences': 'error',
        /**
         * 禁止 setter 有返回值
         */
        'no-setter-return': 'error',
        /**
         * 禁止使用保留字作为变量名
         */
        'no-shadow-restricted-names': 'error',
        /**
         * 禁止在数组中出现连续的逗号
         */
        'no-sparse-arrays': 'error',
        /**
         * 禁止在普通字符串中出现模版字符串里的变量形式
         */
        'no-template-curly-in-string': 'error',
        /**
         * 禁止在 super 被调用之前使用 this 或 super
         */
        'no-this-before-super': 'error',
        /**
         * 禁止 throw 字面量，必须 throw 一个 Error 对象
         */
        'no-throw-literal': 'error',
        /**
         * 不允许在行尾有空白
         */
        'no-trailing-spaces': 'error',
        /**
         * 禁止使用未定义的变量
         */
        'no-undef': 'error',
        /**
         * 禁止将 undefined 赋值给变量
         */
        'no-undef-init': 'error',
        /**
         * 循环内必须对循环条件中的变量有修改
         */
        'no-unmodified-loop-condition': 'error',
        /**
         * 禁止在 return, throw, break 或 continue 之后还有代码
         */
        'no-unreachable': 'error',
        /**
         * 禁止在 finally 中出现 return, throw, break 或 continue
         * @reason finally 中的语句会在 try 之前执行
         */
        'no-unsafe-finally': 'error',
        /**
         * 禁止在 in 或 instanceof 操作符的左侧变量前使用感叹号
         */
        'no-unsafe-negation': 'error',
        /**
         * 禁止无用的表达式
         */
        'no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
                allowTaggedTemplates: true
            }
        ],
        /**
         * 已定义的变量必须使用
         */
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'none',
                ignoreRestSiblings: false,
                caughtErrors: 'none'
            }
        ],
        /**
         * 变量必须先定义后使用, 方法除外（考虑到递归的情况）
         */
        'no-use-before-define': [
            'error',
            {
                variables: false,
                functions: true,
                classes: false
            }
        ],
        /**
         * 禁止正则表达式中出现无用的回溯引用
         * @reason 某些回溯引用语法上没问题，但是会永远匹配到空字符串
         */
        'no-useless-backreference': 'error',
        /**
         * 禁止出现没必要的 call 或 apply
         */
        'no-useless-call': 'error',
        /**
         * 禁止在 catch 中仅仅只是把错误 throw 出去
         * @reason 这样的 catch 是没有意义的，等价于直接执行 try 里的代码
         */
        'no-useless-catch': 'error',
        /**
         * 禁止出现没必要的计算键名
         */
        'no-useless-computed-key': 'error',
        /**
         * 禁止出现没必要的字符串连接
         */
        'no-useless-concat': 'error',
        /**
         * 禁止出现没必要的 constructor
         */
        'no-useless-constructor': 'error',
        /**
         * 禁止出现没必要的转义
         * @reason 转义可以使代码更易懂
         */
        'no-useless-escape': 'error',
        /**
         * 禁止解构赋值时出现同样名字的的重命名，比如 let { foo: foo } = bar;
         */
        'no-useless-rename': 'error',
        /**
         * 禁止使用 var
         */
        'no-var': 'error',
        /**
         * 禁止使用 void
         */
        'no-void': 'error',
        /**
         * 对象属性在同一行不准使用空格
         */
        'no-whitespace-before-property': 'error',
        /**
         * 大括号内需要空格
         */
        'object-curly-spacing': ['error', 'always'],
        /**
         * 换行时操作符必须在行尾
         * 其中，？ ：可以放到行首
         */
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before'
                }
            }
        ],
        /**
         * 申明后不再被修改的变量必须使用 const 来申明
         */
        'prefer-const': [
            'error',
            {
                destructuring: 'all'
            }
        ],
        /**
         * 必须使用 ... 而不是 Object.assign，除非 Object.assign 的第一个参数是一个变量
         */
        'prefer-object-spread': 'error',
        /**
         * Promise 的 reject 中必须传入 Error 对象，而不是字面量
         */
        'prefer-promise-reject-errors': 'error',
        /**
         * 优先使用正则表达式字面量，而不是 RegExp 构造函数
         */
        'prefer-regex-literals': 'error',
        /**
         * 定义对象属性时，不需要加引号的地方不允许加引号
         */
        'quote-props': ['error', 'as-needed'],
        /**
         * 字符串使用单引号或者反引号，除非有转义需要
         */
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        /**
         * parseInt 必须传入第二个参数
         */
        radix: 'error',
        /**
         * generator 函数内必须有 yield
         */
        'require-yield': 'error',
        /**
         * 扩展运算符和表达式之间不允许有空格
         */
        'rest-spread-spacing': ['error', 'never'],
        /**
         * 结尾必须带分号
         */
        semi: ['error', 'always'],
        /**
         * 匿名函数和左括号之间有空格
         */
        'space-before-function-paren': ['error', 'always'],
        /**
         * 小括号内部无空格
         */
        'space-in-parens': ['error', 'never'],
        /**
         * 操作符左右两边有空格
         */
        'space-infix-ops': 'error',
        /**
         * 字运算符需要有空格，运算符可不加
         */
        'space-unary-ops': [
            'error',
            {
                words: true,
                nonwords: false
            }
        ],
        /**
         * 注释的斜线或 * 后必须有空格
         */
        'spaced-comment': [
            'error',
            'always',
            {
                block: {
                    exceptions: ['*'],
                    balanced: true
                }
            }
        ],
        /**
         * 禁止使用 'strict';
         */
        strict: ['error', 'never'],
        /**
         * 创建 Symbol 时必须传入参数
         */
        'symbol-description': 'error',
        /**
         * 必须使用 isNaN(foo) 而不是 foo === NaN
         */
        'use-isnan': 'error',
        /**
         * typeof 表达式比较的对象必须是 'undefined', 'object', 'boolean', 'number', 'string', 'function', 'symbol', 或 'bigint'
         */
        'valid-typeof': 'error',
        /**
         * 必须使用 if (foo === 5) 而不是 if (5 === foo)
         */
        yoda: [
            'error',
            'never',
            {
                onlyEquality: true
            }
        ]
    }
};
