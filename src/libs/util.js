// import Vue from 'vue';
import { Spin, message } from 'ant-design-vue';

export const msg = message;

export default {
  loading() {
    Spin.setDefaultIndicator({
      indicator: {
        render() {
          return <i class='anticon anticon-loading anticon-spin ant-spin-dot'></i>;
        },
      },
    });
  },
};
