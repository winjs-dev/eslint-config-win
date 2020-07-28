module.exports = {
    rules: {
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
        ]
    }
};
