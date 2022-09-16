<template lang="pug">
.container
  h1 Books
  a-table(:columns="columns" :data-source="books" :row-key="record => record._id" :pagination="{ pageSize: 10 }")
    template(#title='books')
      a-button(type='primary') Add Book
    a-button(type="danger" slot='delete-action' slot-scope='text') Delete
    a-button(type="primary" slot='edit-action' slot-scope='text') Edit
    book-item
</template>
<script>
import { mapState } from 'vuex'
import BookItem from '../components/BookItem.vue';

const columns = [
  {
    title: "Book Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "ISBN",
    dataIndex: "isbn",
    key: "isbn",
  },
  {
    title: "Delete",
    key: "x",
    scopedSlots: { customRender: "delete-action" },
  },
  {
    title: "Edit",
    key: "x",
    scopedSlots: { customRender: "edit-action" },
  }
];

export default {
  name: 'books',
  component: {
    BookItem
  },
  computed: {
    ...mapState('book', ['books'])
  },
  data() {
    return {
      columns
    };
  },

}
</script>
<style lang="scss">

</style>
