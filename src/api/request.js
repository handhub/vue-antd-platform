import qs from 'qs';
import http from './http';

export default {
  post(url, param, config) {
    return http.post(url, qs.stringify(param), config);
  },
};
