import http from './http';

export default {
  post(url, param) {
    return http.post(url, param);
  },
};
