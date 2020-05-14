<template>
  <div>
    <v-btn
      fab
      icon
      v-on:click="oLink('https://gitlab.com/shijiezhou1')"
      color="orange"
    >
      <v-icon>{{svgObj.gitlab}}</v-icon>
    </v-btn>
    <v-btn
      fab
      icon
      v-on:click="oLink('https://www.linkedin.com/in/shijiezhou1/')"
      color="blue"
    >
      <v-icon>{{svgObj.linkedin}}</v-icon>
    </v-btn>
    <v-btn
      fab
      icon
      v-on:click="oLink('https://github.com/shijiezhou1')"
      color="black"
    >
      <v-icon>{{svgObj.github}}</v-icon>
    </v-btn>
    <v-btn
      fab
      icon
      v-on:click="oLink('https://twitter.com/ShijieZhou5')"
      color="blue"
    >
      <v-icon>{{svgObj.twitter}}</v-icon>
    </v-btn>
    <v-btn
      fab
      icon
      v-on:click="oLink('https://stackoverflow.com/users/10401645/software-engineer')"
      color="orange"
    >
      <v-icon>{{svgObj.stackoverflow}}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiStackOverflow, mdiGitlab } from '@mdi/js'

export default {
  data() {
    return {
      svgObj: {
        github: mdiGithub,
        gitlab: mdiGitlab,
        linkedin: mdiLinkedin,
        twitter: mdiTwitter,
        stackoverflow: mdiStackOverflow,
      },
    }
  },
  methods: {
    oLink(href) {
      window.open(href, '_blank');
    }
  }
}
</script>

<style>
</style>