<template>
  <div id="prometheus">
    <main>
      <section
        v-for="item in items"
        :key="item.msg"
      >
        <router-link :to="{ name: 'article', params: { msg: item.msg, html: item.html }}">
          <img
            :key="item.msg"
            class="section-img profile"
            v-lazy="parseImgUrl(item.img)"
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
export default {
  props: {
    items: null
  },
  methods: {
    viewArticle(path) {
      this.$router.push({ name: 'article', params: { msg: 'adasdsd' } })
    },
    parseImgUrl(url) {
      // 0 means init match,
      // -1 means not match
      if (url.indexOf("/images/") === 0) {
        return require('@/assets' + url);
      }
      return url;
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
@import "@/assets/styles/prometheus.scss";
#prometheus {
  > main {
    display: inline-block;
    > section {
      width: 200px;
    }
  }
}
</style>
