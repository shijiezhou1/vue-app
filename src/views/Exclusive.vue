<template>
  <div id="exclusive">
    <title>{{title}}</title>
    <h1></h1>
    <section>
      <div class="fluid-container">
        <video
          autoplay
          src="https://assets.mixkit.co/videos/preview/mixkit-bright-orange-sunset-on-beach-2168-large.mp4"
          muted
          loop
        >
        </video>
      </div>
    </section>
  </div>
</template>

<script>
export default {
props: ['title'],
}
</script>

<style lang="scss">
  .fluid-container{
    video {
      width: 100%;
    }
  }
</style>
