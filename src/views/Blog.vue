<template>
  <div id="blog">
    <title>{{title}}</title>

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

    <BlogContainer :contents="mediumList" />
  </div>
</template>
<script>

import BlogContainer from '../components/BlogContainer.vue';
import Loading from 'vue-loading-overlay';
import BlockQuoteContent from '../components/BlockQuoteContent.vue';
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  props: ['title'],
  components: {
    BlogContainer,
    Loading,
    BlockQuoteContent
  },
  data() {
    return {
      mediumData: null,
      isLoading: false,
      fullPage: true,
    }
  },
  computed: {
    ...mapState({
      mediumList: state => state.mediums.mediums
    }),
  },
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
  color: var(--text-color);

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
