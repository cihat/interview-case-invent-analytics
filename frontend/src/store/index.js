import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import account from './account'
import book from './book'

Vue.use(Vuex)

axios.defaults.baseURL = process.env.VUE_APP_BASE_PATH
axios.defaults.withCredentials = true

const store = new Vuex.Store({
  modules: {
    account,
    book
  }
})

export default async function init() {
  await store.dispatch('account/init')
  await store.dispatch('book/init')
  await store.dispatch('account/fetchUsers')

  return store
}
