<template>
  <div id="consociation">
    <v-container grid-list-xl>
      <v-layout
        row
        justify-center
        align-center
        wrap
        class="mt-4 pt-2"
      >
        <div
          v-for="item in items"
          :key="item.msg"
        >
          <a
            :href="item.url"
            target="_blank"
          >
            <img
              :id="item.msg"
              class="section-img profile"
              v-lazy="require('@/assets' + item.img)"
              src="item.img"
              alt="image"
            />
          </a>
        </div>
      </v-layout>
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

  img {
    display: block;
    padding: 10px;
    margin: 0 auto;
    width: 200px;
    height: 200px;
  }

  @media only screen and (max-width: 620px) {
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
