module.exports = {
    rules: {
        /**
         * 类的成员之间需要空行，如果写在同一行跳过空行检查
         */
        'lines-between-class-members': ["error", "always", { "exceptAfterSingleLine": true }]
    }
};
