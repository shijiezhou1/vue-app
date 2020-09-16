import { getSlow } from "../services/api";

const state = { id: 'abc123', name: 'post', posts: null }

const getters = { allPosts: state => state.posts }

const actions = {
  async fetchPosts({ commit }) {
    const fetchData = await getSlow('/books');
    commit('setPosts', fetchData.data);
  }
}

const mutations = {
  setPosts: (state, posts) => (state.posts = posts)
}

export default {
  state,
  actions,
  getters,
  mutations
}
