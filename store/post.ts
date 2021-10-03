import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  res: null,
  form: {},
  err: []
})

export type PostState = ReturnType<typeof state>

export const mutations: MutationTree<PostState> = {
  SET_DATA (state, res) {
    state.res = res
  },
  SET_ERR (state, err) {
    state.err = err
  }
}
export const actions: ActionTree<PostState, any> = {
  create_post ({ commit }) {
    this.$repositories.users().all()
      .then(res => commit('SET_DATA', res.data)).catch(e => commit('SET_ERR', e))
  }
}
