import Vue from 'vue'
import Vuex from 'vuex'
import { phraseService } from '@/infrastructure/Factory'

Vue.use(Vuex)

export const state = {
  phrases: [],
}

export const getters = {}

export const mutations = {
  addPhrases (state, phrases) {
    state.phrases = state.phrases.concat(phrases)
  },
}

export const actions = {
  async getRandomPhrases ({ commit }, numberOfPhrases) {
    const phrases = await phraseService.getRandomPhrases(numberOfPhrases)
    commit('addPhrases', phrases)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
