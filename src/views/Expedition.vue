<template>
  <div id="project">
    <title>{{title}}</title>

    <BlockQuoteContent
      content="The Way Get Started Is To Quit Talking And Begin Doing."
      author="Walt Disney"
      occupation="Entrepreneur, Animator, Writer, Voice actor and Film Producer."
    ></BlockQuoteContent>
    <Prometheus :items="allArticle" />
  </div>
</template>

<script>

import BlockQuoteContent from '../components/BlockQuoteContent.vue';
import Prometheus from "../components/Prometheus";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ['title'],
  components:{
     Prometheus,
     BlockQuoteContent
  },
  data() {
    return {
    }
  },
  computed: mapGetters(["allArticle"]),
  methods: {
      ...mapActions(['fetchArticles'])
  },
  mounted() {
    if(this.$store.getters.allArticle.length === 0 ) {
      // reload if it is empty
      this.fetchArticles();
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
  color: var(--text-color);
  background: linear-gradient(lightblue, pink);
  min-height: 100vh;
}
</style>
