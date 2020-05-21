<template>
  <div id="exclusive">
      <h1></h1>
      <v-img
        :src="`https://picsum.photos/200/1800?random`"
        :lazy-src="`https://picsum.photos/2/18?random`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
