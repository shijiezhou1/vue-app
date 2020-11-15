<template>
  <div class="socialMedia">
    <v-btn v-for="so in social" :key="so.name"
           fab
           icon
           v-on:click="oLink(so.url)"
           :color="so.color"
           class="social-media"
    >
      <v-icon>{{so.name}}</v-icon>
    </v-btn>

  </div>
</template>

<script>

export default {
  data() {
    return {
      // TODO: using short url
      social: [
        {
          name: 'fab fa-gitlab',
          url: 'https://gitlab.com/shijiezhou1',
          color: 'deep-orange'
        },
        {
          name: 'fab fa-medium',
          url: 'https://medium.com/@.jay',
          color: 'grey darken-4'
        },
        {
          name: 'fab fa-linkedin',
          url: 'https://www.linkedin.com/in/shijiezhou1/',
          color: 'blue darken-2'
        },
        {
          name: 'fab fa-github',
          url: 'https://github.com/shijiezhou1',
          color: 'black'
        },
        {
          name: 'fab fa-twitter',
          url: 'https://twitter.com/ShijieZhou5',
          color: 'blue'
        },
        {
          name: 'fab fa-pinterest',
          url: 'https://www.pinterest.com/cs5129606/',
          color: 'red'
        },
        {
          name: 'fab fa-stack-overflow',
          url: 'https://stackoverflow.com/users/10401645',
          color: 'orange'
        },
        {
          name: 'fab fa-tumblr-square',
          url: 'https://shijiezhou.tumblr.com/',
          color: 'grey darken-3'
        },
      ]
    }
  },
  methods: {
    oLink(href) {
      window.open(href, '_blank');
    }
  }
}
</script>

<style lang="scss"></style>
