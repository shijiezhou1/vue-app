<template>
  <div id="blog">
    <title>{{Blog}}</title>

    <loading
      class="vld-overlay"
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="fullPage"
      :width=200
      :height=200
    ></loading>

    <h1>Blog</h1>
    <BlockQuoteContent
      content="Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
      author="Albert Einstein"
      occupation="Theoretical Physicist"
    ></BlockQuoteContent>

    <BlogContainer :contents="allMedium" />
  </div>
</template>
<script>

import BlogContainer from '../components/BlogContainer.vue';
import Loading from 'vue-loading-overlay';
import BlockQuoteContent from '../components/BlockQuoteContent.vue';
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    BlogContainer,
    Loading,
    BlockQuoteContent
  },
  data() {
    return {
      Blog: "🛹 | Blog",
      mediumData: null,
      isLoading: false,
      fullPage: true,
    }
  },
  computed: mapGetters(["allMedium"]),
  methods: {
      ...mapActions(['fetchMediums'])
  },
  created() {
    if(this.$store.getters.allMedium.length === 0) {
      this.fetchMediums();
    }
  }
}
</script>

<style lang="scss" scoped>
#blog {
  @import "@/assets/styles/github-calendar-responsive.scss";
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .vld-overlay {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    color: green;
  }
}
</style>
