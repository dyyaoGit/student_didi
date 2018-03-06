<template>
  <div>
    <h1>router name is {{$route.name}}</h1>
    <h2>我是我的滴滴</h2>
    <button @click="test">
      按钮
    </button>
    <didi-input></didi-input>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "mydidi",
    methods: {
      test() {
        this.$router.push("/news?id=15")
      },
      isLogin() {
        axios.get('http://didi.yaojunrong.com/api/user/isLogin')
          .then((res) => {
            if(!res.data.ret){
              setTimeout(function() {
                this.$router.push('/login')

              },3000)
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    },
    mounted() {
      // this.isLogin();
    }
  }
</script>

<style scoped>

</style>
