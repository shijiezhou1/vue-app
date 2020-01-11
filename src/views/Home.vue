<template>
    <div id="home"><HelloWorld msg="Welcome to Your Vue.js App" /></div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'home',
    components: {
        HelloWorld
    }
};
</script>

<style lang="scss">
#home {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
}
</style>
