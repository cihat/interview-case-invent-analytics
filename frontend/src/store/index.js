import { createStore } from 'vuex'
import axios from 'axios'
import user from './user'

export default createStore({
  state: {},
  mutations: {},
  actions: {
    // async fetchUsers() {
    //   return (await axios.get('/api/user')).data
    // },
  },
  modules: {
    user,
  },
})
