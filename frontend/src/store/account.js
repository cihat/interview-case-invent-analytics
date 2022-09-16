import axios from 'axios'

const mutations = {
  SET_COMPUTER_ID: 'setComputerId',
  SET_USER: 'setUser'
}

const actions = {
  RESEND_VERIFICATION_EMAIL: 'resendVerificationEmail',
  REGISTER_USER: 'registerUser',
  LOGIN: 'login',
  LOGOUT: 'logout',
  FETCH_USER: 'fetchUser',
  INIT: 'init'
}

const account = {
  namespaced: true,
  state: () => ({
    user: null
  }),
  mutations: {
    [mutations.SET_USER](state, user) {
      state.user = user
    }
  },
  actions: {
    async [actions.INIT]({ dispatch }) {

      await dispatch(actions.FETCH_USER)
    },
    async [actions.REGISTER_USER](store, user) {
      return axios.post('/users/register', { user })
    },
    async [actions.LOGIN]({ commit }, credentials) {
      const user = await axios.post('/users/session', credentials)

      commit(mutations.SET_USER, user.data)
    },
    async [actions.LOGOUT]({ commit }) {
      await axios.delete('/users/session')

      commit(mutations.SET_USER, null)
    },
    async [actions.FETCH_USER]({ commit }) {
      const user = await axios.get('/users')

      commit(mutations.SET_USER, user.data)
    },
    async [actions.UPDATE_DIRECTOR](store, director) {
      await axios.patch('/users', { director })
    },
    async [actions.UPDATE_PROFILE](store, profile) {
      await axios.patch('/users/me', profile)
    },
    async [actions.RESEND_VERIFICATION_EMAIL](store, email) {
      await axios.post('/users/outgoing-verification-emails', { email })
    }
  }
}

export default account
