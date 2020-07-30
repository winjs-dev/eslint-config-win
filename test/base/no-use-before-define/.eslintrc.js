module.exports = {
    rules: {
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
        ]
    }
};
