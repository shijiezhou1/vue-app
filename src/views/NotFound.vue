<template>
  <div id="notfound">
    <title>{{title}}</title>
    <h1>Oops! Page Not Found</h1>
    <h4>The {{ resource }} you're looking for is not found.</h4>
    <router-link :to="{ name: 'home' }">Back to the home page</router-link>
  </div>
</template>
<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    },
    title: null
  }
}
</script>

<style lang="scss" scoped="scoped">
#notfound {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);

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
