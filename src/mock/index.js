import Mock from 'mockjs';
import '@/mock/user';

// 设置全局延时
Mock.setup({
  timeout: '300-600',
});
