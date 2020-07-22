module.exports = {
    rules: {
        /**
         * 最大连续空行不准超过1
         */
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 1 }]
    }
};
