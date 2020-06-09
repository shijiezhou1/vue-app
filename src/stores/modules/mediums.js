import { get } from "../api/api";

const state = { mediums: [] }

const getters = { allMedium: state => state.mediums }

const actions = {
  async fetchMediums({ commit }) {
    const fetchData = await get('/medium')
    commit('setMediums', fetchData.data);
  }
}

const mutations = {
  setMediums: (state, mediums) => (state.mediums = mediums)
}

export default {
  state,
  getters,
  actions,
  mutations
}
