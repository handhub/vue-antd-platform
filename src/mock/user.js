import Mock from 'mockjs';

const login = ({ body }) => {
  const result = {};
  const { name, password } = JSON.parse(body);
  if (name === 'admin' && password === '888888') {
    result.code = 0;
  } else {
    result.code = -1;
  }
  return result;
};

Mock.mock('/login', 'post', login);
