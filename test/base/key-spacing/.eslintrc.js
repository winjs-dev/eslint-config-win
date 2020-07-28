module.exports = {
    rules: {
        /**
         * 声明对象时，冒号前无空格，冒号后有空格
         */
        'key-spacing': ['error', { beforeColon: false, afterColon: true }]
    }
};
