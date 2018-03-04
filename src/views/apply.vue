<template>
  <div class="apply">
    <mt-header title="报名流程">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <div class="img-wrap">
      <img src="static/images/303111456.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'apply',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style>

</style>
<style scoped>
.img-wrap img{
  display: block;
  width: 100%;
}
</style>
