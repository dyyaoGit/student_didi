<template>
  <div class="wrap">
    <h1 v-text="item.title">我是详情页</h1>
    <div class="content" v-html="item.content">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "new-item",
    data() {
      return {
        item: {}
      }
    },
    methods: {
      getData() {
        // router   ==> 路由
        // route    ==> 路线
        // routes   ==> 路线们

        axios.get("http://didi.yaojunrong.com/api/article/get?id="+this.$route.query.id).then(res => {
          this.item = res.data.data[0]
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style>
.wrap {
  padding: 20px;
}
  .wscnph {
    display: block;
    width: 100%;
  }
</style>
