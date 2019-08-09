import Vue from 'vue';
import {
  Button, Form, Input, Icon, Checkbox, message, Alert, Menu, Layout, AutoComplete, Dropdown, Badge,
  Tabs, Spin, List, Avatar, Breadcrumb,
} from 'ant-design-vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import request from './api/request';
import bus from '@/libs/bus';

// eslint-disable-next-line
if (process.env.NODE_ENV !== 'production') require('@/mock');

Vue.use(Button);
Vue.use(Form);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Alert);
Vue.use(Menu);
Vue.use(Layout);
Vue.use(AutoComplete);
Vue.use(Dropdown);
Vue.use(Badge);
Vue.use(Tabs);
Vue.use(Spin);
Vue.use(List);
Vue.use(Avatar);
Vue.use(Breadcrumb);

Vue.prototype.$axios = axios;
Vue.prototype.$message = message;
Vue.prototype.$bus = bus;
Vue.prototype.$request = request;
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  // eslint-disable-next-line
  const CancelToken = axios.CancelToken;
  // eslint-disable-next-line
  bus.source.cancel && bus.source.cancel();
  bus.source = CancelToken.source();
  next();
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
