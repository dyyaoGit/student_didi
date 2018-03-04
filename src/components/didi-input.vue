<template>
  <label class="input-wrap">
    <span class="label-font">
      {{label}}
    </span>
    <input :type="type" class="didi-input" v-model="currentValue">
  </label>
</template>

<script>
  export default {
    name: "didi-input",
    props: {
      value: {
        type: String,
        require: true
      },
      label: {
        type: String,
        default: 'text'
      },
      type: {
        type: String
      }
    },
    data () {
      return {
          currentValue: this.value
      }
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
      currentValue(val) {
        this.$emit('input',val)
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
