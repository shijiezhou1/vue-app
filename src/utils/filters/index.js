import Vue from "vue"

Vue.filter("first4Chars", str => str.substring(0, 4))
Vue.filter("last4Chars", str => str.substring(str.length - 4))

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
