module.exports = {
    rules: {
        /**
         * 缩进规则为两个空格，其中：
         * switch case 缩进为1
         * 换行声明缩进为1
         * 链式调用缩进为1
         * 数组换行声明缩进为1
         * 对象换行声明缩进为1
         * 三元表达式缩进为1
         *
         * @reason  编译报错
         */
        // "indent": ["off", 2, {
        //     "SwitchCase": 1,
        //     "VariableDeclarator": 1,
        //     "outerIIFEBody": 1,
        //     "MemberExpression": 1,
        //     "FunctionDeclaration": { "parameters": 1, "body": 1 },
        //     "FunctionExpression": { "parameters": 1, "body": 1 },
        //     "CallExpression": { "arguments": 1 }
        // }],
        indent: 'off'
    }
};
