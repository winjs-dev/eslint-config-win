# eslint-config-win

此规则适用于 JavaScript/Vue 项目的 ESLint 配置规范。

**目前已支持 Vue 3.0，需要指定 extends 配置vue3**

## 安装


```bash
yarn add @winner-fed/eslint-config-win -D
```

##  依赖版本
```bash
  eslint ^8.45.0
  @babel/core ^7.22.9
  @babel/eslint-parser ^7.22.9
  vue-eslint-parser ^9.3.1
  eslint-plugin-vue ^9.15.1
  @typescript-eslint/parser ^6.2.0
  @typescript-eslint/eslint-plugin ^6.2.0
```
*Tips*：如果项目中没有安装此依赖包或者版本不一致，请安装或者升级。 

## 用法
- 在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
    extends: [
        '@winner-fed/win',
    ],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
    }
};
```

- 项目目录下的 `package.json` 添加检测指令，举个例子
```diff
{
 ...
 "scripts": {
+    "lint:es": "eslint \"src/**/*.{vue,js,jsx}\" --fix",
 }
 ...
}
```

### Vue

```bash
npm install --save-dev eslint @babel/eslint-parser vue-eslint-parser eslint-plugin-vue @winner-fed/eslint-config-win
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
    extends: [
        '@winner-fed/win',
        // 这里是针对 vue2 的配置
        '@winner-fed/win/vue', 
        // 如果是 vue3 的项目工程，则推荐下面配置
        // '@winner-fed/win/vue3',
    ],
    env: {
        // 你的环境变量（包含多个预定义的全局变量）
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    globals: {
        // 你的全局变量（设置为 false 表示它不允许被重新赋值）
        //
        // myGlobal: false
    },
    rules: {
        // 自定义你的规则
    }
};
```

### TypeScript Vue 

```js
module.exports = {
  extends: [ 
    '@winner-fed/win', 
    '@winner-fed/win/vue3', 
    '@winner-fed/win/typescript'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',

      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
  },
  env: {
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  rules: {
    // Customize your rules
  },
};
```

## 参考

- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)

## 开发维护
- 以测试开发驱动，config/rules/*.json 文件都是根据 test/ 文件夹对应的生成的，不需要手动调整


