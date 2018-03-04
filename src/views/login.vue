<template>
  <div class="login">
    <mt-header title="登录">
      <div slot="left">
        <mt-button icon="back" @click="$router.back()"></mt-button>
      </div>
    </mt-header>

    <div class="user-header">
      <i class="iconfont icon-user"></i>
    </div>

    <div class="login-box">
      <didi-input label="账号名：" v-model="userName" style="border-radius: 5px 5px 0 0 "></didi-input>
      <didi-input label="密码：" type="password" v-model="pwd"
                  style="border-top: none;border-radius: 0 0 5px 5px">
      </didi-input>
    </div>

    <div class="btn-wrap">
      <mt-button size="large" type="primary">
        登录
      </mt-button>
      <mt-button size="large" style="color: #006eb4">
        免费注册
      </mt-button>
    </div>


  </div>
</template>

<script>
  import didiInput from '@/components/didi-input'
  export default {
    name: "login",
    components: {
      didiInput
    },
    data() {
      return {
        userName: '',
        pwd: ''
      }
    }
  }
</script>

<style scoped>

  .user-header {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 20px;
    text-align: center;
  }
  .user-header .icon-user {
    font-size: 60px;
    width: 90px;
    color: #888;
    height: 90px;
    border: 3px solid #fff;
    box-sizing: border-box;
    padding-top: 8px;
    background: #f5f5f5;
    border-radius: 50%;
    box-shadow: 0 0 4px 4px rgba(0,0,0,.2);
  }
  .login-box {
    margin-top: 20px;
    padding: 10px;
  }
  .btn-wrap {
    padding: 10px;
  }

</style>
