import axios from 'axios'

const state = { mediums: []}

const getters = { allMedium: state => state.mediums }

const actions = {
  async fetchMediums({commit}) {
    const res = await axios.get(process.env.VUE_APP_API + '/medium')
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
