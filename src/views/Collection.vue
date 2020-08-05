<template>
  <div id="collection">
    <title>{{title}}</title>
    <h1>Collection:</h1>
    <BlockQuoteContent
      content="Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
      author="Antoine de Saint-Exupéry"
      occupation="French writer, poet, aristocrat, journalist and pioneering aviator"
    ></BlockQuoteContent>

    <br />

    <v-carousel
      cycle
      height="60vh"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        eager
        :key="i"
        :src="slide.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      >

        <!-- DO NOT DELETE BELOW -->
        <!-- <v-sheet
          :color="colors[i]"
          height="100%"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          > -->
        <!-- <div class="display-3">{{ slide }} Slide</div> -->
        <!-- </v-row> -->
        <!-- </v-sheet> -->
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
  import BlockQuoteContent from "../components/BlockQuoteContent.vue";

  export default {
    props: [ 'title' ],
    components: {
      BlockQuoteContent
    },
    data() {
      return {
        colors: [
          "indigo",
          "warning",
          "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      slides: [
        { src: process.env.VUE_APP_GITHUB_CDN+"img/collection1.jpg" },
        { src: process.env.VUE_APP_GITHUB_CDN+"img/collection2.jpg" },
        { src: process.env.VUE_APP_GITHUB_CDN+"img/collection3.jpg" },
        { src: process.env.VUE_APP_GITHUB_CDN+"img/collection4.jpg" },
        { src: process.env.VUE_APP_GITHUB_CDN+"img/collection5.jpg" },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#collection {
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
