<template>
  <div class="container">
    <div class="content">
      <div class="top">
        <div class="header">
          <img alt="logo" class="logo" src="@/assets/img/logo.svg" />
          <span class="title">Vue Antd Platform</span>
        </div>
        <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
      </div>
      <div class="login">
        <a-form :form="form" @submit="onSubmit">
          <a-form-item>
            <a-input size="large" placeholder="admin/user"
              v-decorator="[
                'username',
                {rules: [{ required: true, message: '请输入账户名', whitespace: true }]}
              ]"
            >
              <a-icon slot="prefix" type="user" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input size="large" placeholder="admin/user" type="password"
              v-decorator="[
                'password',
                {rules: [{ required: true, message: '请输入密码', whitespace: true}]}
              ]"
            >
              <a-icon slot="prefix" type="lock" />
            </a-input>
          </a-form-item>
          <div class="check">
            <a-checkbox @change="onChange">自动登录</a-checkbox>
            <a>忘记密码</a>
          </div>
          <a-form-item>
            <a-button
            :loading="logging"
            style="width: 100%;margin-top: 24px"
            size="large"
            htmlType="submit"
            type="primary">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script>
import USER from '@/api/const/user';

export default {
  data() {
    return {
      username: '',
      password: '',
      checked: false,
      logging: false,
      form: this.$form.createForm(this),
    };
  },
  computed: {
    formValid() {
      return !this.username || !this.password;
    },
  },
  methods: {
    onChange(e) {
      this.checked = e.target.checked;
    },
    onSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.logging = true;
          this.$reqPostNoLoading(USER.Login, values).then((res) => {
            this.logging = false;
            this.$message.success('登录成功');
            this.$router.push({
              name: 'home',
              query: { token: res.token },
            });
          }).then(() => {
            this.logging = false;
          });
        }
      });
    },
  },
};
</script>


<style lang="less" scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    .top {
      text-align: center;
      .header {
        height: 44px;
        line-height: 44px;
        a {
          text-decoration: none;
        }
        .logo {
          height: 44px;
          vertical-align: top;
          margin-right: 16px;
        }
        .title {
          font-size: 33px;
          color: rgba(0,0,0,.85);
          font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;
          font-weight: 600;
          position: relative;
          top: 2px;
        }
      }
      .desc {
        font-size: 14px;
        color: rgba(0,0,0,.45);
        margin-top: 12px;
        margin-bottom: 40px;
      }
    }
    .login{
      width: 368px;
      margin: 0 auto;
      @media screen and (max-width: 576px) {
        width: 95%;
      }
      @media screen and (max-width: 320px) {
        .captcha-button{
          font-size: 14px;
        }
      }
      .icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;
        &:hover {
          color: #1890ff;
        }
      }
      .check{
        display:flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
