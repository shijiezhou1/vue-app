import { get } from "../services/api";

const state = { consociation: [] }

const getters = { allConsociation: state => state.consociation }

const actions = {
  async fetchConsociation( { commit } ) {
    const fetchData = await get( '/consociation' );
    commit( 'setConsociation', fetchData.data );
  }
}

const mutations = {
  setConsociation: ( state, consociation ) => ( state.consociation = consociation )
}

export default {
  state,
  getters,
  actions,
  mutations,
}
