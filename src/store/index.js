import Cookies from 'js-cookie'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: ''
  },
  mutations: {
    SET_USERNAME(state, username) {
      state.username = username
    }
  },
  actions: {
    createUserSession({ commit }, username) {
      Cookies.set('todo:user', username, { expires: 1, secure: true })
      commit('SET_USERNAME', username)
    },
    syncUsername() {
      const username = Cookies.get('todo:user')

      console.log(username)
    }
  },
  getters: {
    getUsername: (state) => state.username
  }
})
