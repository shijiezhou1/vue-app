import { get } from "../services/api";

const state = { books: [] }

const getters = { allBooks: state => state.books }

const actions = {
  async fetchBooks({ commit }) {
    const fetchData = await get('/books');
    commit('setBooks', fetchData.data);
  }
}

const mutations = {
  setBooks: (state, books) => (state.books = books)
}

export default {
  state,
  getters,
  actions,
  mutations,
}
