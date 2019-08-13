import Mock from 'mockjs';
import qs from 'qs';
import User from '@/api/const/user';

const login = ({ body }) => {
  const result = {};
  const { username, password } = qs.parse(body);
  if (username === 'admin' && password === 'admin') {
    result.code = 0;
    result.data = {
      token: 'admin',
    };
  } else if (username === 'user' && password === 'user') {
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
  const { token } = qs.parse(body);
  let menus;
  if (token === 'admin') {
    menus = [
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
  } else {
    menus = [{
      icon: 'dashboard',
      title: '主页',
      children: [
        {
          path: '/dashboard/workplace',
          title: '工作台User',
        },
      ],
    }];
  }
  return {
    code: 0,
    data: menus,
  };
};
export default () => {
  Mock.mock(`/api/${User.Login}`, 'post', login);
  Mock.mock('/api/user/menus', 'post', getMenus);
};
