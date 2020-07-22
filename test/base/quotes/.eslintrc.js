module.exports = {
    rules: {
        /**
         * 字符串使用单引号或者反引号，除非有转义需要
         */
        quotes: ["error", "single", { "avoidEscape": true, "allowTemplateLiterals": true }]
    }
};
