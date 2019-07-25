import Mock from 'mockjs';

const matches = require.context('./', false, /\.\/((?!index)\w+\.js)/);
matches.keys().forEach((key) => {
  matches(key).default();
});

// 设置全局延时
Mock.setup({
  timeout: '300-600',
});
