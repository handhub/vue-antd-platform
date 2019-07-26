import Mock from 'mockjs';
import User from '@/api/const/user';

const login = ({ body }) => {
  const result = {};
  const { name, password } = JSON.parse(body);
  if (name === 'admin' && password === 'admin') {
    result.code = 0;
    result.data = {
      token: 'admin',
    };
  } else if (name === 'user' && password === 'user') {
    result.code = 0;
    result.data = {
      token: 'user',
    };
  } else {
    result.code = -1;
    result.msg = '账号密码错误';
  }
  return result;
};

const getMenus = ({ body }) => {
  const { token } = JSON.parse(body);
  if (token === 'admin') {
    return [
      {
        icon: 'dashboard',
        title: '主页',
        children: [
          {
            path: '/dashboard/workplace',
            title: '工作台Admin',
          },
        ],
      },
      {
        icon: 'user',
        title: '权限管理',
        children: [
          {
            path: '/authority/user',
            title: '用户管理',
          },
          {
            path: '/authority/role',
            title: '角色管理',
          },
        ],
      },
    ];
  }
  return [{
    icon: 'dashboard',
    title: '主页',
    children: [
      {
        path: '/dashboard/workplace',
        title: '工作台User',
      },
    ],
  }];
};

export default () => {
  Mock.mock(User.Login, 'post', login);
  Mock.mock('/user/menus', 'post', getMenus);
};
