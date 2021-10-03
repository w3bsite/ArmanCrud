/* eslint-disable @typescript-eslint/no-unused-vars */
// no-use-before-define
import { GetterTree, ActionTree, MutationTree } from 'vuex'
export const state = () => ({
  res: null,
  form: {},
  err: []
})
export type RootState = ReturnType<typeof state>
export const mutations:MutationTree<RootState> = {
  SET_DATA (state, res) {
    state.res = res
  },
  SET_ERR (state, err) {
    state.err = err
  }
}
export const actions : ActionTree<RootState, RootState> = {
  create_post ({ commit }, post) {
    this.$repositories.post.create(post)
      .then(res => commit('SET_DATA', res.data)).catch(e => commit('SET_ERR', e))
  }
}
