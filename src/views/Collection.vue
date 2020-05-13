<template>
  <div id="collection">
    <h1>Collection:</h1>
    <BlockQuoteContent
      content="Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
      author="Antoine de Saint-Exupéry"
      occupation="French writer, poet, aristocrat, journalist and pioneering aviator"
    ></BlockQuoteContent>


  </div>
</template>

<script>
import BlockQuoteContent from "../components/BlockQuoteContent.vue";
export default {
    components: {
        BlockQuoteContent
    }
}
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