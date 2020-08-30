<template>
  <!-- <div id="hacker-list">
        <input class="search" />
        <span class="sort" data-sort="name">Sort by name</span>
        <span class="sort" data-sort="city">Sort by city</span>

        <ul class="list">
            <li>
                <h3 class="name">Jonny</h3>
                <p class="city">Stockholm</p>
            </li>
            <li>
                <h3 class="name">Jonas</h3>
                <p class="city">Berlin</p>
            </li>
            <li>
                <h3 class="name">ABC</h3>
                <p class="city">Java</p>
            </li>
            <li>
                <h3 class="name">ZED</h3>
                <p class="city">Java</p>
            </li>
            <li>
                <h3 class="name">Java</h3>
                <p class="city">abc</p>
            </li>
        </ul>
        <button @click="sort()">sort</button>
    </div> -->

  <div id="home">
    <title>{{title}}</title>
    <button @click="logout">CLICK TO SHOW</button>
    <Prometheus :items="data" />
    <Modal :is-show="isShow" @close="isShow=false"></Modal>
    <!-- <BlogContainer :contents="this.mediumData" /> -->
  </div>
</template>

<script>
import Prometheus from "../components/Prometheus";
import BlogContainer from '../components/BlogContainer.vue';
import data from "../assets/data.json";
import Modal from '../components/Modal.vue';
import { mapActions } from "vuex";

export default {
  props: {
    title: null
  },
  components: {
    BlogContainer,
    Prometheus,
    Modal
  },
  data: function () {
    return {
      data: data,
      isShow: false,
    };
  },
  beforeCreate() {
     console.log('hit home', this)
  },
  mounted() {
    this.$ga.page('/home');
  },
  methods: {
    logout(){
      this.isShow = !this.isShow;
    },
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
  // mounted() {
  //     const options = {
  //         valueNames: ['name', 'city']
  //     };
  //     hackerList = new List('hacker-list', options);
  // },
  // methods: {
  //     add() {
  //         hackerList.add({ name: 'Jonas', city: 'Berlin' });
  //     },
  //     sort() {
  //         hackerList.sort('name', { order: 'asc' });
  //     }
  // }
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
