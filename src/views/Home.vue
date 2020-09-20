<template>
  <div id="home">
    <Prometheus :items="data" />
  </div>
</template>

<script>
import Prometheus from "../components/Prometheus.vue";
import BlogContainer from '../components/BlogContainer.vue';
import data from "../assets/data.json";
import { mapActions } from "vuex";

export default {
  components: {
    BlogContainer,
    Prometheus,
  },
  data: function () {
    return {
      data: data,
    };
  },
  mounted() {
    document.title = this.$route.meta.title;
    this.$ga.page('/home');
  },
  methods: {
    ...mapActions(['fetchArticles', 'fetchMediums', 'fetchBooks', 'fetchConsociation']),
  },
  created() {
    if (this.$store.getters.allMedium.length === 0) {
      this.fetchMediums();
      this.fetchArticles();
      this.fetchBooks();
      this.fetchConsociation();
    }
  }
};
</script>

<style lang="scss" scoped="scoped">
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    & img {
      width: 100%;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    & img {
      max-width: 768px;
    }
  }
  & img {
    max-width: 768px;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    & img {
      max-width: 768px;
    }
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    & img {
      max-width: 768px;
    }
  }
}
</style>
