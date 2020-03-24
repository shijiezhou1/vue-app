<template>
    <button @click="changeTitle">Click Here</button>
</template>

<script>
    export default {
      name: 'app-header',
      data() {
        return {
        }
      },
      methods:{
        changeTitle() {
          this.$emit("titleChanged","子向父组件传值");
        }
      }
    }
</script>

<style>
</style>
