<template>
    <div class="myFooter">
      <router-link to="/" :class="{active: $route.name === 'apply'}">
        <div>
          <i class="iconfont icon-home"></i>
        </div>
        <h2>
          首页
        </h2>
      </router-link>

      <router-link to="/">
        <div>
          <i class="iconfont icon-project"></i>
        </div>
        <h2>
          创业项目
        </h2>
      </router-link>
      <router-link to="/">
        <div>
          <i class="iconfont icon-xunhuan"></i>
        </div>
        <h2>
          报名流程
        </h2>
      </router-link>
      <router-link to="/">
        <div>
          <i class="iconfont icon-file"></i>
        </div>
        <h2>
          平台风采
        </h2>
      </router-link>
      <router-link to="/mydidi" :class="{active: $route.name === 'mydidi'}">
        <div>
          <i class="iconfont icon-LC_icon_user_fill_add"></i>
        </div>
        <h2>
          我的滴滴
        </h2>
      </router-link>

    </div>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style scoped>
  .myFooter {
    padding: 8px 0;
    text-align: center;
    background: #333;
  }
  i {
    font-size: 24px;
  }
  h2 {
    font-weight: 400;
    font-size: 12px;
  }
  a {
    width: 60px;
    color: #fff;
  }
  .active {
    color: #f00
  }

</style>



