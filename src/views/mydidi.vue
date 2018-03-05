<template>
  <div>
    <h1>router name is {{$route.name}}</h1>
    <h2>我是我的滴滴</h2>
    <button @click="test">
      按钮
    </button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "mydidi",
    methods: {
      test() {
        console.log(this.$route.name)
      },
      isLogin() {
        let that = this;
        axios.get('http://didi.yaojunrong.com/api/user/isLogin')
          .then(function (res) {
            if(!res.data.ret){
              setTimeout(function() {
                that.$router.push('/login')

              },3000)
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    },
    mounted() {
      this.isLogin();
    }
  }
</script>

<style scoped>

</style>
