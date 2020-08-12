<template>
  <div id="cv" style="height: 93%">
    <title>{{ title }}</title>
    <iframe :src="url" frameborder="0" width="100%" height="100%"></iframe>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';

export default {
  props: [ 'title' ],
  components: {
    Loading
  },
  data() {
    return {
      url: "https://cdn.jsdelivr.net/gh/shijiezhou1/Artemis@master/img/SHIJIE ZHOU RESUME.pdf"
    };
  },
}
</script>

<style lang="scss" scoped>
</style>
