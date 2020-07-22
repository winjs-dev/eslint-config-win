# eslint-config-win

团队内部的ESLint配置

## 安装


```bash
yarn add @winner-fed/eslint-config-win -D
```

##  依赖版本
```bash
eslint ^7.2.0
babel-eslint ^10.1.0
vue-eslint-parser ^7.1.0
eslint-plugin-vue ^6.2.2
```


## 用法
在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

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

### Vue

```bash
npm install --save-dev eslint babel-eslint vue-eslint-parser eslint-plugin-vue @winner-fed/eslint-config-win
```

在你的项目的根目录下创建一个 `.eslintrc.js` 文件，并将以下内容复制进去：

```js
module.exports = {
    extends: [
        '@winner-fed/win',
        '@winner-fed/win/vue',
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

## 参考

- [ESlint Code Guide](http://eslint.org/docs/user-guide/configuring)
- [ESlint Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)
- [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)


