<template>
  <div id="app">
    <router-view/>
    <myFooter class="footer"></myFooter>

  </div>
</template>

<script>
  import myFooter from '@/components/myFooter'
export default {
  name: 'App',
  components: {
    myFooter
  }
}
</script>

<style>
  @import 'style/init.css';
  #app {
    background: #f1f1f1;
  }
  #app .mint-header {
    height: 45px;
    background: #006eb8;
  }
  .footer {
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

</style>
