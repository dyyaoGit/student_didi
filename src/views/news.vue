<template>
  <div class="news">
    <mt-header title="新闻公告"></mt-header>
    <router-link :to="'/newsItem?name=yao&id='+item.id" class="item" v-for="item in arr" :key="item.id">
      <h2 v-text="item.title">
        我是标题
      </h2>
      <div class="content" v-html="item.contentText">
        我是新闻
      </div>
      <div class="date" v-text="item.createTime">2018-2-30 </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "news",
    data () {
      return {
        arr: []
      }
    },
    methods: {
      getNews() {
        this.$axios.get('getArticle').then(res => {
          console.log(res)
        })
      }
    },
    mounted() {
      this.getNews();
    }
  }
</script>


<style>
  .news a {
    color: #000;
  }
  .news .content {
    display:-webkit-box; /*将对象作为弹性伸缩盒子模型显示。*/

  -webkit-box-orient:vertical;
  /*//从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
  -webkit-line-clamp:2;
  /*//这个属性不是css的规范属性，需要组合上面两个属性，表示显示的行数。*/


  }
  .content img{
    display: none;
  }
</style>
<style scoped>
.item {
  padding: 20px;
  border-left: 2px solid blue;
}
  .date {
    text-align: right;
  }

</style>
