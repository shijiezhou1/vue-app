<template>
  <div>
    <button @click="changeTitle">Click Here</button>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'app-header',
  data() {
    return {
      age: '100'
    }
  },
  methods: {
    changeTitle() {
      this.$emit("titleChanged", "子向父组件传值");
    },
  }
}
</script>

<style>
</style>
