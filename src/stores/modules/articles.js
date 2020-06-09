import {get}from '../api/api'

const state = {
  articles: []
}

const getters = {
  allArticle: state => state.articles
}

const actions = {
  async fetchArticles({commit}) {
    const res = await get('/articles')
    commit('setArticles', res.data);
  },

  async createArticle({commit}, title) {

  },

  async deleteArticle({commit}, id) {

  },

  async updateArticle({commit}, id) {

  }
}

const mutations = {
  setArticles: (state, articles) => (state.articles = articles),

  createArticles: (state, article) => state.articles.unshift(article), // push to the beginning

  removeArticles: (state, id) => (state.articles = state.articles.filter(art => art.id !== id)),

  updateArticles: (state, updArticle) => {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
