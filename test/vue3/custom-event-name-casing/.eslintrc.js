module.exports = {
  rules: {
    /**
     * 自定义事件名必须用 kebab-case 或 camelCase 风格
     */
    'vue/custom-event-name-casing': ['error',
      'kebab-case' | 'camelCase',
      {
        'ignores': []
      }
    ]
  }
};
