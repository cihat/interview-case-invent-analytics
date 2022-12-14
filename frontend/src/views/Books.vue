<template lang="pug">
.container
  SubHeader(title='Books' subTitle='List of books')
  a-table(:columns="columns" :data-source="books" :row-key="record => record._id" :pagination="{ pageSize: 10 }" bordered size="large")
    template(#title='books')
      //- a-button(type='primary' @click='showModal') Add Todo
      Modal(componentName='add-book' )
        CreateBook
    div(slot='filterDropdown' slot-scope='{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }' style='padding: 8px')
      a-input(v-ant-ref='c => (searchInput = c)' :placeholder='`Search ${column.dataIndex}`' :value='selectedKeys[0]' style='width: 188px; margin-bottom: 8px; display: block;'
      @change='e => setSelectedKeys(e.target.value ? [e.target.value] : [])' @pressenter='() => handleSearch(selectedKeys, confirm, column.dataIndex)')
      a-button(type='primary' icon='search' size='small' style='width: 90px; margin-right: 8px' @click='() => handleSearch(selectedKeys, confirm, column.dataIndex)')
        | Search
      a-button(size='small' style='width: 90px' @click='() => handleReset(clearFilters)')
        | Reset
    a-icon(slot='filterIcon' slot-scope='filtered' type='search' :style="{ color: filtered ? '#108ee9' : undefined }")
    template(slot='customRender' slot-scope='text, record, index, column')
      span(v-if='searchText && searchedColumn === column.dataIndex')
        template(v-for="(fragment, i) in text\
        .toString()\
        .split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))")
          mark.highlight(v-if='fragment.toLowerCase() === searchText.toLowerCase()' :key='i') {{ fragment }}
          template(v-else='') {{ fragment }}
      template(v-else='')
        | {{ text }}

    a-rate(slot='isbn' v-model="value")
    a-button(slot='_id' slot-scope='id')
      a(:href="`/books/${id}`") {{ id }}
    a-button(type="primary" slot='receive-action' slot-scope='id, book' @click='handleReceiveBook(book)' :disabled="book.receivedBy")
      | {{ book.receivedBy ? 'Received' : 'Receive' }}
    a-button(type="danger" slot='delete-action' slot-scope='_id, book' @click='handleDeleteBook(book)') Delete
    //- book-item
</template>
<script>
import { mapState, mapActions } from 'vuex'
import BookItem from '../components/BookItem.vue';
import SubHeader from "../components/SubHeader";
import book from '../store/book';
import CreateBook from "../components/CreateBook.vue"
import { message, notification } from 'ant-design-vue'
import Modal from "../components/Modal.vue"


const columns = [
  {
    title: "Book Title",
    dataIndex: "title",
    width: "20%",
    key: "title",
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) =>
      record.name
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus();
        }, 0);
      }
    },
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
    width: "15%",
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'customRender',
    },
    onFilter: (value, record) =>
      record.name
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus();
        }, 0);
      }
    },
  },
  {
    title: "ISBN",
    dataIndex: "isbn",
    key: "isbn",
    width: "15%",
    scopedSlots: {
      filterDropdown: 'filterDropdown',
      filterIcon: 'filterIcon',
      customRender: 'isbn',
    },
    onFilter: (value, record) =>
      record.name
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => {
          this.searchInput.focus();
        }, 0);
      }
    },
  },
  {
    key: "_id",
    width: "20%",
    dataIndex: "_id",
    title: "Go to Detail or Edit",
    scopedSlots: { customRender: "_id" },
  },
  {
    title: "Received By",
    key: "receive-action",
    width: "10%",
    dataIndex: "_id, receivedBy",
    scopedSlots: { customRender: "receive-action" },
  },
  {
    title: "Delete",
    key: "delete-action",
    width: "10%",
    dataIndex: "_id, receivedBy",
    scopedSlots: { customRender: "delete-action" },
  },
];

export default {
  name: 'books',
  components: {
    BookItem,
    SubHeader,
    Modal,
    CreateBook
  },
  data() {
    return {
      searchText: '',
      searchInput: null,
      searchedColumn: '',
      columns,
      value: 2.5,
      checkBorrow: false
    }
  },
  computed: {
    ...mapState('book', ['books', 'book']),
  },
  methods: {
    ...mapActions('book', ['fetchBooks', "receiveBook", 'deleteBook']),
    handleSearch(selectedKeys, confirm, dataIndex) {
      confirm();
      this.searchText = selectedKeys[0];
      this.searchedColumn = dataIndex;
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = '';
    },
    async handleReceiveBook(book) {
      console.log('book: ', book._id)
      try {
        await this.receiveBook(book._id)
        message.success(`Borrowed book ???? with id ${book._id}`)
      } catch (e) {
        notification.error({
          message: 'Error',
          description: e.response?.data?.message ?? e.message ?? 'An unknown error occured'
        })
      } finally {
        this.fetchBooks()
      }
    },
    async handleDeleteBook(book) {
      console.log('book: ', book._id)
      try {
        await this.deleteBook(book._id)
        message.success(`Deleted book ???? with id ${book._id}`)
      } catch (e) {
        notification.error({
          message: 'Error',
          description: e.response?.data?.message ?? e.message ?? 'An unknown error occured'
        })
      } finally {
        this.fetchBooks()
      }
    },
  }
}
</script>
<style lang="scss">

</style>
