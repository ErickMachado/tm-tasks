import Cookies from 'js-cookie'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    username: ''
  },
  mutations: {
    APPEND_TASK(state, task) {
      state.tasks.push(task)
    },
    REMOVE_TASK(state, taskId) {
      const taskIndex = state.tasks.findIndex(({ id }) => id === taskId)

      state.tasks.splice(taskIndex, 1)
    },
    SET_TASK_STATUS(state, taskId) {
      const taskIndex = state.tasks.findIndex(({ id }) => id === taskId)

      state.tasks[taskIndex].complete = true
    },
    SET_USERNAME(state, username) {
      state.username = username
    }
  },
  actions: {
    createTask({ commit }, taskTitle) {
      const task = {
        complete: false,
        title: taskTitle,
        id: crypto.randomUUID()
      }

      commit('APPEND_TASK', task)
    },
    createUserSession({ commit }, username) {
      Cookies.set('todo:user', username, { expires: 1, secure: true })
      commit('SET_USERNAME', username)
    },
    completeTask({ commit }, taskId) {
      commit('SET_TASK_STATUS', taskId)
    },
    deleteTask({ commit }, taskId) {
      commit('REMOVE_TASK', taskId)
    },
    syncUsername({ commit }) {
      const username = Cookies.get('todo:user')

      commit('SET_USERNAME', username)
    }
  },
  getters: {
    getCompletedTasks: (state) =>
      state.tasks.filter(({ complete }) => complete === true),
    getRemainingTasks: (state) =>
      state.tasks.filter(({ complete }) => complete === false),
    getTasks: (state) => state.tasks,
    getUsername: (state) => state.username
  }
})
