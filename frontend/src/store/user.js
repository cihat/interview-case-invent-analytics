import axios from 'axios'

const mutations = {
  SET_USER: 'setUser',
}

const actions = {
  REGISTER_USER: 'registerUser',
  LOGIN: 'login',
  LOGOUT: 'logout',
  FETCH_SESSION: 'fetchSession',
  INIT: 'init',
}

axios.defaults.baseURL = 'http://localhost:3000/api/users'

const user = {
  namespaced: true,
  state: () => ({
    user: null,
  }),

  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user
    },
  },
  getters: {
    isLoggedIn: state => (state.user ? true : false),
    user: state => state.user,
  },
  actions: {
    async [actions.INIT]({ dispatch }) {
      console.log('test')
      await dispatch(actions.FETCH_SESSION)
    },
    async [actions.REGISTER_USER](store, user) {
      return axios.post('/register', { user })
    },
    async [actions.LOGIN]({ commit }, credentials) {
      const user = await axios.post('/session', credentials)

      commit(mutations.SET_USER, user.data)
    },
    async [actions.LOGOUT]({ commit }) {
      await axios.delete('/session')

      commit(mutations.SET_USER, null)
    },
    async [actions.FETCH_SESSION]({ commit }) {
      const user = await axios.get('/session')

      commit(mutations.SET_USER, user.data)
    },
  },
}

export default user
