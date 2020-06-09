import { get } from "../api/api";

const state = { mediums: [] }

const getters = { allMedium: state => state.mediums }

const actions = {
  async fetchMediums({ commit }) {
    const res = await get('/medium')
    commit('setMediums', res.data);
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
