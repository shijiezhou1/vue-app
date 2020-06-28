<template>
  <div id="book">
    <title>{{ title }}</title>
    <v-container fluid>
      <v-row class="align-center my-5">
        <div
          v-for="item in items"
          :key="item.id"
          class="mx-auto mb-5"
        >
          <a
            :href="item.url"
            target="_blank"
          >
            <v-img
              :src="item.img"
              :lazy-src="item.img"
              aspect-ratio="1"
              eager
              width="12rem"
              height="12rem"
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
import { mapGetters, mapActions, mapState } from "vuex";
  export default {
    props: [ 'title' ],
    data() {
      return {
        isLoading: false,
        }
    },
    mounted() {
    if(this.$store.getters.allBooks.length === 0 ) {
      this.fetchBooks();
    }
  },
    computed: {
      ...mapState({
        items: state => state.books.books
      })
    },
    methods: {
      ...mapActions(['fetchBooks'])
    },
  };
</script>

<style lang="scss" scoped="scoped">
  #book {
    max-width: 700px;
    margin: 0 auto;
    padding: 0px;
  }
</style>
