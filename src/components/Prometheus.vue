<template>
  <div id="prometheus">
    <main>
      <section
        v-for="item in items"
        :key="item.msg"
      >
         <router-link :to="{ name: 'article', params: { msg: item.msg, html: item.html }}">
          <img
            :key="item.img"
            class="section-img profile"
            v-lazy="require('@/assets'+ item.img)"
            alt="image"
            
          >
          <div class="overlay">
            <div class="text">{{item.msg}}</div>
          </div>
        </router-link>
      </section>
    </main>

  </div>
</template>

<script>
import json from '../assets/data.json';
     
export default {
  data() {
    return {
      items: null,
    }
  },
  
  mounted() {
     
    this.items = json;

  },
  methods: {
      viewArticle(path) {
          this.$router.push({name: 'article', params: { msg: 'adasdsd' } })
      }
  }
}
</script>

<style lang="scss" scoped="scoped">
@import "@/assets/styles/prometheus.scss";
</style>
