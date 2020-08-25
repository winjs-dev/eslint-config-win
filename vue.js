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
    parser: 'vue-eslint-parser',
    parserOptions: {
        // 设置 js 的解析器为 babel-eslint
        // https://github.com/mysticatea/vue-eslint-parser#-options
        parser: 'babel-eslint',
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
    plugins: ['vue'],
    rules: {
        /**
         * 支持在模版中使用 eslint-disable-next-line 等注释
         */
        'vue/comment-directive': 'error',
        /**
         * 组件的 name 属性必须符合 PascalCase
         * @reason 这是官方建议的规范
         */
        'vue/component-definition-name-casing': ['error', 'PascalCase'],
        /**
         * 组件中必须按照 <template>, <script>, <style> 排序
         */
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        /**
         * 必须使用 === 或 !==，禁止使用 == 或 !=
         */
        'vue/eqeqeq': ['error', 'always'],
        /**
         * 修复 no-unused-vars 不检查 jsx 的问题
         */
        'vue/jsx-uses-vars': 'error',
        /**
         * 计算属性禁止包含异步方法
         */
        'vue/no-async-in-computed-properties': 'error',
        /**
         * 禁用已废弃的 scope 属性
         */
        'vue/no-deprecated-scope-attribute': 'error',
        /**
         * 使用 v-slot 替代已废弃的 slot
         */
        'vue/no-deprecated-slot-attribute': 'error',
        /**
         * 禁用已废弃的 slot-scope
         */
        'vue/no-deprecated-slot-scope-attribute': 'error',
        /**
         * 禁止重复的键名
         */
        'vue/no-dupe-keys': 'error',
        /**
         * 禁止出现重复的属性
         */
        'vue/no-duplicate-attributes': ['error'],
        /**
         * 禁止解构赋值中出现空 {} 或 []
         */
        'vue/no-empty-pattern': 'error',
        /**
         * 禁止使用特殊空白符（比如全角空格），除非是出现在字符串、正则表达式、模版字符串中或 HTML 内容中
         */
        'vue/no-irregular-whitespace': [
            'error',
            {
                skipStrings: true,
                skipComments: false,
                skipRegExps: true,
                skipTemplates: true,
                skipHTMLTextContents: true
            }
        ],
        /**
         * 禁止出现语法错误
         */
        'vue/no-parsing-error': 'error',
        /**
         * 组件的 name 属性禁止使用保留字
         */
        'vue/no-reserved-component-names': 'error',
        /**
         * 禁止覆盖保留字
         */
        'vue/no-reserved-keys': 'error',
        /**
         * 禁止在 <textarea> 中出现模版语法 {{message}}
         */
        'vue/no-textarea-mustache': 'error',
        /**
         * 禁止定义在 components 中的组件未使用
         */
        'vue/no-unused-components': 'error',
        /**
         * 模版中已定义的变量必须使用
         */
        'vue/no-unused-vars': 'error',
        /**
         * 禁止在同一个元素上使用 v-if 和 v-for 指令
         */
        'vue/no-use-v-if-with-v-for': 'error',
        /**
         * <component> 必须有绑定的组件
         */
        'vue/require-component-is': 'error',
        /**
         * render 函数必须有返回值
         */
        'vue/require-render-return': 'error',
        /**
         * v-for 指令的元素必须有 v-bind:key
         */
        'vue/require-v-for-key': 'error',
        /**
         * 计算属性必须有返回值
         */
        'vue/return-in-computed-property': 'error',
        /**
         * 禁止在模版中用 this
         */
        'vue/this-in-template': 'error',
        /**
         * 当一个节点上出现两个 v-on:click 时，其中一个必须为 exact
         */
        'vue/use-v-on-exact': 'error',
        /**
         * 使用缩写的 : 而不是 v-bind:
         */
        'vue/v-bind-style': 'error',
        /**
         * 在 v-on 指令中，禁止调用没有参数的函数
         */
        'vue/v-on-function-call': 'error',
        /**
         * 使用缩写的 @click 而不是 v-on:click
         */
        'vue/v-on-style': 'error',
        /**
         * template 的根节点必须合法
         */
        'vue/valid-template-root': 'error',
        /**
         * v-bind 指令必须合法
         */
        'vue/valid-v-bind': 'error',
        /**
         * v-bind:foo.sync 指令必须合法
         */
        'vue/valid-v-bind-sync': 'error',
        /**
         * v-cloak 指令必须合法
         */
        'vue/valid-v-cloak': 'error',
        /**
         * v-else 指令必须合法
         */
        'vue/valid-v-else': 'error',
        /**
         * v-else-if 指令必须合法
         */
        'vue/valid-v-else-if': 'error',
        /**
         * v-for 指令必须合法
         */
        'vue/valid-v-for': 'error',
        /**
         * v-html 指令必须合法
         */
        'vue/valid-v-html': 'error',
        /**
         * v-if 指令必须合法
         */
        'vue/valid-v-if': 'error',
        /**
         * v-model 指令必须合法
         */
        'vue/valid-v-model': 'error',
        /**
         * v-on 指令必须合法
         */
        'vue/valid-v-on': 'error',
        /**
         * v-once 指令必须合法
         */
        'vue/valid-v-once': 'error',
        /**
         * v-pre 指令必须合法
         */
        'vue/valid-v-pre': 'error',
        /**
         * v-show 指令必须合法
         */
        'vue/valid-v-show': 'error',
        /**
         * v-slot 指令必须合法
         */
        'vue/valid-v-slot': 'error',
        /**
         * v-text 指令必须合法
         */
        'vue/valid-v-text': 'error'
    }
};
