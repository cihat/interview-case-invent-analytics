<template lang='pug'>
div
  a-card(:loading='loading' :title='book.title')
    img(slot='cover' alt='example' src='https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop')
    a-card-meta(:title='book?.description')
    a-card-meta(:title='book?.author')
    a-card-meta(:title='book?.isbn')
    br
    h3 Received by {{ book?.receivedBy?.name }}



</template>
<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  created() {
    if (this.book) {
      this.loading = !this.loading;
    }
  },
  methods: {
  },
};
</script>
