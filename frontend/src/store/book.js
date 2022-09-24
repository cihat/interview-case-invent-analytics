import axios from 'axios'

const mutations = {
  CREATE_BOOK: 'createBook',
  UPDATE_BOOK: 'updateBook',
  DELETE_BOOK: 'deleteBook',
  SET_BOOKS: 'setBooks',
  SET_BOOK: 'setBook'
}

const actions = {
  CREATE_BOOK: 'createBook',
  UPDATE_BOOK: 'updateBook',
  DELETE_BOOK: 'deleteBook',
  FETCH_BOOKS: 'fetchBooks',
  FETCH_BOOK: 'fetchBook',
  INIT: 'init',
  RECEIVE_BOOK: 'receiveBook'
}

const book = {
  namespaced: true,
  state: () => ({
    books: [],
    book: null
  }),
  getters: {
    books: state => state.books,
    book: state => state.book
  },
  mutations: {
    [mutations.CREATE_BOOK](state, book) {
      state.books.push(book)
    },
    [mutations.UPDATE_BOOK](state, book) {
      state.books = state.books.map(b => (b.id === book.id ? book : b))
    },
    [mutations.DELETE_BOOK](state, book) {
      state.books = state.books.filter(b => b.id !== book.id)
    },
    [mutations.SET_BOOKS](state, books) {
      state.books = books
    },
    [mutations.SET_BOOK](state, book) {
      state.book = book
    }
  },
  actions: {
    async [actions.INIT]({ dispatch }) {
      await dispatch(actions.FETCH_BOOKS)
    },
    async [actions.CREATE_BOOK](book) {
      try {
        await axios.post('/books', { book })
      } catch (e) {
        throw e
      }
    },
    async [actions.UPDATE_BOOK]({ commit }, book) {
      const res = await axios.patch(`/books/${book.id}`, { book })

      commit(mutations.UPDATE_BOOK, res.data)
    },
    async [actions.DELETE_BOOK]({ commit }, book) {
      await axios.delete(`/books/${book.id}`)

      commit(mutations.DELETE_BOOK, book)
    },
    async [actions.FETCH_BOOKS]({ commit }) {
      const res = await axios.get('/books')

      commit(mutations.SET_BOOKS, res.data)
    },
    async [actions.FETCH_BOOK]({ commit }, id) {
      const res = await axios.get(`/books/${id}`)

      commit(mutations.SET_BOOK, res.data)
    },
    async [actions.RECEIVE_BOOK]({ commit }, bookId) {
      const res = await axios.post(`/books/${bookId}/receive`)

      commit(mutations.SET_BOOK, res.data)
    }
  }
}

export default book
