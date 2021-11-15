module.exports = {
  rules: {
    /**
     * 组件中必须按照 <template>, <script>, <style> 排序
     */
    'vue/component-tags-order': [
      'error',
      {
        order: ['template', 'script', 'style'],
      },
    ],
  },
};
