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
  export default {
    name: "mydidi",
    methods: {
      test() {
        console.log(this.$route.name)
      }
    }
  }
</script>

<style scoped>

</style>
