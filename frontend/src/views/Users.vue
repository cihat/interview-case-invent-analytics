<template lang="pug">
  .container
    h1 Users
    a-table(:columns="columns" :data-source="users" :row-key="record => record._id" :pagination="{ pageSize: 10 }")
      a-button(type="danger" slot='delete-action' slot-scope='text') Delete
      a-button(type="primary" slot='edit-action' slot-scope='text') Edit
      book-item
  </template>
<script>
import { mapState } from 'vuex'

const columns = [
  {
    title: "User Name",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: 'name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: "Borrow Books",
    dataIndex: "borrowedBooks",
    key: "borrowedBooks",
  },
  {
    title: "Received Books",
    dataIndex: "receivedBooks",
    key: "receivedBooks",
  },
]

export default {
  name: "users",
  computed: {
    ...mapState("account", ["users"]),
  },
  data() {
    return {
      columns,
    };
  },
}
</script>
<style lang="scss">

</style>
