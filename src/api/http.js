/* eslint-disable */
import axios from 'axios';
import { message } from 'ant-design-vue';


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 1000 * 60;
axios.interceptors.request.use(
  (config) => {
    // util.loading();
    window.console.log('show');
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (response) => {
    window.console.log('hide');
    return response;
  },
  (error) => {
    window.console.log('hide');
    return Promise.reject(error);
  },
);

function process(res, resolve, reject) {
  if (!res || res.status !== 200) {
    reject('api error');
  } else {
    const resp = res.data;
    if (resp.code === 0) {
      resolve(resp.data, 2);
    } else {
      // reject(resp);
      message.error(resp.msg);
    }
  }
}

export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then((res) => {
        process(res, resolve, reject);
      }).catch(function (error) {
        message.error('请检查网络情况');
      });
    });
  },
};

