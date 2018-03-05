<template>
  <label class="input-wrap">
      <span>
        {{label}}
      </span>
    <input :type="type" class="didi-input" v-model="currentValue">
  </label>
</template>

<script>
  export default {
    name: "didi-input",
    props: {
      label: {
        type: String
      },
      type: {
        type: String,
        default: "text"
      },
      value: {
        type: String
      }
    },
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      value(val) {
        console.log(val)
        this.currentValue = val;
      },
      currentValue(val) {
        this.$emit("input",val)
      }
    }
  }
</script>

<style scoped>
  .input-wrap {
    display: flex;
    border-radius: 5px;
    padding: 15px;
    background: #fff;
    border: 1px solid #ddd;
  }
  .didi-input {
    flex-grow: 1;
    font-size: 14px;
    outline: none;
  }
  .label-font {
    width: 65px;
    font-weight: 600;
  }

</style>
