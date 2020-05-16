<template>
  <div id="project">
    <title>{{title}}</title>

    <BlockQuoteContent
      content="The Way Get Started Is To Quit Talking And Begin Doing."
      author="Walt Disney"
      occupation="Entrepreneur, Animator, Writer, Voice actor and Film Producer."
    ></BlockQuoteContent>

    <Prometheus :items="data" />
  </div>
</template>

<script>

import BlockQuoteContent from '../components/BlockQuoteContent.vue';
import Prometheus from "../components/Prometheus";
import data from '../assets/data.json';
import data2 from '../assets/data2.json';

export default {
  components:{
     Prometheus,
     BlockQuoteContent
  },
  data() {
    return {
      title: "🔥｜ Expedition",
      data: data.concat(data2)
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
#project {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(lightblue, pink);
}
</style>
