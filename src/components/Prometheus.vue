<template>
  <div id="prometheus">

    <main>
      <section
        v-for="item in items"
        :key="item.message"
      >
        <a
          href="#"
          class="info-link"
          v-on:click="viewProject(item.path)"    
        >
          <img
            class="section-img profile"
            v-lazy="item.img"
            src="item.img"
            alt="image"
          >
          <div class="overlay">
            <div class="text">{{item.msg}}</div>
          </div>
        </a>
      </section>
    </main>

  </div>
</template>

<script>
export default {
  data() {
    return {
      items: null
    }
  },
  mounted() {
    this.items = [
      { path: "about", img: require('@/assets/images/9images/1.jpg'), msg: 'Bristlebot', des: 'Mimicking a reptile.', },
      { path: "about", img: require('@/assets/images/9images/2.jpg'), msg: 'Telesignalization', des: 'Telesignalization is a human relationship meansure', },
      { path: "about", img: require('@/assets/images/9images/3.jpg'), msg: 'Music Player', des: 'New way to play music on your webpage.', },
      { path: "about", img: require('@/assets/images/9images/4.jpg'), msg: 'Paper Cage', des: 'A furniture that print by 3D material.', },
      { path: "about", img: require('@/assets/images/9images/5.jpg'), msg: 'Personal Information', des: 'Learn about me', },
      { path: "about", img: require('@/assets/images/9images/6.jpg'), msg: 'Coconut Factory', des: 'A game design to have fun', },
      { path: "about", img: require('@/assets/images/9images/7.jpg'), msg: 'Zoe Trope', des: 'A zoetrope is one of several pre-film animation devices that produce the illusion of motion', },
      { path: "about", img: require('@/assets/images/9images/8.jpg'), msg: 'Escape City', des: 'Unity Game that make by personal drawing', },
      { path: "about", img: require('@/assets/images/9images/9.jpg'), msg: 'Practical Cup', des: 'A 3D cup that makes by meshmixer', },
    ]
  },
   methods: {
    viewProject: function (path) {
        this.$router.push({ path })
    }
  }
}
</script>

<style lang="scss" scoped="scoped">
@import "@/assets/styles/prometheus.scss";
</style>
