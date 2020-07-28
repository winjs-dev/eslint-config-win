module.exports = {
    rules: {
        /**
         * 换行时操作符必须在行尾
         * 其中，？ ：可以放到行首
         */
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }]
    }
};
