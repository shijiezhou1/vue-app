import Vue from 'vue'
import Vuex from 'vuex'
import * as user from './modules/user.js'
import * as event from './modules/event.js'
import * as notification from './modules/notification.js'
import * as post from './modules/post.js'
import articles from './modules/articles.js'
import mediums from './modules/mediums.js'
import books from './modules/books.js'
import consociation from './modules/consociation.js'

// Vue persistable
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  modules: {
    user,
    event,
    notification,
    post,
    articles,
    mediums,
    books,
    consociation,
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  actions: {
    "SOCKET_oops"(state, server) {
      console.log('A')
      Vue.toasted.global.appError({
        message: server.message
      }).goAway(1200);
    },
    "SOCKET_success"(state, server) {
      console.log(`
                    +++++++
                     @@@@
                     @@@@
                     @@@@
                     @@@@
                     @@@@
                     @@@@
                     @@@@
       +++++++      @@@@@
        @@@@@      @@@@@
          @@@@@ @@@@@
             @@@@@
            .......
      `)
      // Vue.toasted.global.appSuccess({
      //   message: server.message
      // }).goAway(1200);
    },
    "SOCKET_info"(state, server) {
      console.log('C')
      Vue.toasted.global.appInfo({
        message: server.message
      }).goAway(1200);
    }
  }
})
