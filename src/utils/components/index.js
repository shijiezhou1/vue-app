import Vue from "vue"

Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


Vue.component("async-component", (resolve, reject) => {
  setTimeout(() => {
    resolve({
      template: "<div>Async component ...</div>"
    });
  }, 1000);
});
