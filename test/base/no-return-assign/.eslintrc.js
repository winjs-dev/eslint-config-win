module.exports = {
    rules: {
        /**
         * 禁止在 return 语句里赋值，除非用小括号包裹
         */
        'no-return-assign': ['error', 'except-parens']
    }
};
