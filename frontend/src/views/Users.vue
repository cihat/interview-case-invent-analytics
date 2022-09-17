<template lang="pug">
.container
  SubHeader(title='Users' sub-title='List of Users')
  a-table(:columns="columns" :data-source="users" :row-key="record => record._id" :pagination="{ pageSize: 10 }")
    //- a-button(type="danger" slot='delete-action' slot-scope='text') Delete
    //- a-button(type="primary" slot='edit-action' slot-scope='text') Edit
    a-button(slot='borrowedBooks' slot-scope='borrowedBooks') {{ borrowedBooks.length }}
    a-button(slot='receivedBooks' slot-scope='receivedBooks') {{ receivedBooks.length }}
</template>
<script>
import { mapState } from 'vuex'
import SubHeader from "../components/SubHeader";

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
    title: "Borrowed Books",
    dataIndex: "borrowedBooks",
    scopedSlots: { customRender: "borrowedBooks" },
    key: "borrowedBooks",
  },
  {
    title: "Received Books",
    dataIndex: "receivedBooks",
    scopedSlots: { customRender: "receivedBooks" },
    key: "receivedBooks",
  },
]

export default {
  name: "users",
  components: {
    SubHeader
  },
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
