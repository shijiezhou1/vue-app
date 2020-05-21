<template>
  <div id="consociation">
     <v-container fluid>
       <v-row class="align-center my-5">
      <div
          v-for="item in items"
          :key="item.msg"
          class="mx-auto mb-5"
        >
        <a
          :href="item.url"
          target="_blank"
        >
      <v-img
        :src="require('@/assets' + item.img)"
        :lazy-src="require('@/assets' + item.img)"
        aspect-ratio="1"
        eager
        width="12rem"
        height = "12rem"
        :alt="item.msg"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5">
            </v-progress-circular>
          </v-row>
        </template>
      </v-img>
      </a>
      </div>

      </v-row>
    </v-container>
  </div>
</template>

<script>
import json from '../assets/data.consociation.json';

export default {
  data() {
    return {
      dialog: false,
      items: []
    };
  },
  created() {
    this.items = json;
  }
};
</script>

<style lang="scss" scoped="scoped">
#consociation {
  max-width: 700px;
  margin: 0 auto;
  padding: 0px;
}
</style>
