/* eslint-disable */
import axios from 'axios';
import bus from '@/libs/bus';
import { message } from 'ant-design-vue';
import { showLoading, hideLoading } from '@/libs/loading'; 

axios.defaults.baseURL = process.env.VUE_APP_API;
axios.defaults.timeout = 1000 * 60;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
  (config) => {
    config.cancelToken = bus.source.token;
    if (config && !config.loading) {
      showLoading();
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);
axios.interceptors.response.use(
  (response) => {
    hideLoading();
    return response;
  },
  (error) => {
    hideLoading();
    return Promise.reject(error);
  },
);

function processResult(res, resolve, reject, cfg) {
  if (!res || res.status !== 200) {
    reject('api error');
  } else {
    const resp = res.data;
    if (resp.code === 0) {
      resolve(resp.data);
    } else {
      if (cfg && cfg.catch) {
        reject(resp);
      } else {
        message.error(resp.msg);
      }
    }
  }
}

export default {
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config).then((res) => {
        processResult(res, resolve, reject, config);
      }).catch((error) => {
        message.error('请检查网络情况');
      });
    });
  },
};

