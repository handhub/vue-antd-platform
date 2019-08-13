import qs from 'qs';
import http from './http';

function post(url, param, config) {
  return http.post(url, qs.stringify(param), config);
}

function postNoLoading(url, param, config) {
  const cfg = {
    headers: {
      loading: 'no',
    },
  };
  const option = Object.assign(cfg, config);
  return post(url, param, option);
}

const RequestPlugin = {
  /* eslint-disable */
  install(Vue) {
    Vue.prototype.$reqPost = post;
    Vue.prototype.$reqPostNoLoading = postNoLoading;
  },
};

export default RequestPlugin;
