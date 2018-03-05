<template>
  <label>
    <span>
      {{label}}
    </span>
    <input type="text" v-model="currentValue" style="line-height: 50px;background: #ff0;font-size: 30px;">
  </label>
</template>

<script>
  export default {
    name: "input-didi",
    props: {
      label: {
        type: String
      },
      value: {

      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
        console.log(val)
      },
      currentValue(val) {
        this.$emit("input",val)
      }
    }
  }
</script>

<style scoped>

</style>
