<template>
  <div id="prometheus">
    <title>{{title}}</title>
    <main>
      <section
        v-for="item in items"
        :key="item.msg"
        
      >
      <!-- @click="viewArticle(item.msg)" -->
         <router-link :to="{ name: 'article', params: { msg: item.msg }}">
          <img
            :id="item.msg"
            class="section-img profile"
            v-lazy="item.img"
            src="item.img"
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
  data() {
    return {
      title: "Home | 🧩",
      items: null
    }
  },
  mounted() {
    this.items = [
      { img: require('@/assets/images/9images/1.jpg'), msg: 'Bristlebot', des: 'Mimicking a reptile.', },
      { img: require('@/assets/images/9images/2.jpg'), msg: 'Telesignalization', des: 'Telesignalization is a human relationship meansure', },
      { img: require('@/assets/images/9images/3.jpg'), msg: 'Music Player', des: 'New way to play music on your webpage.', },
      { img: require('@/assets/images/9images/4.jpg'), msg: 'Paper Cage', des: 'A furniture that print by 3D material.', },
      { img: require('@/assets/images/9images/5.jpg'), msg: 'Personal Information', des: 'Learn about me', },
      { img: require('@/assets/images/9images/6.jpg'), msg: 'Coconut Factory', des: 'A game design to have fun', },
      { img: require('@/assets/images/9images/7.jpg'), msg: 'Zoe Trope', des: 'A zoetrope is one of several pre-film animation devices that produce the illusion of motion', },
      { img: require('@/assets/images/9images/8.jpg'), msg: 'Escape City', des: 'Unity Game that make by personal drawing', },
      { img: require('@/assets/images/9images/9.jpg'), msg: 'Practical Cup', des: 'A 3D cup that makes by meshmixer', },
    ]
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
