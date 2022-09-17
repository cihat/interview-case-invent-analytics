<template lang="pug">
.container
  SubHeader(title='Book Detail')
  BookItem(:book='book')
</template>
<script>
import { mapState, mapActions } from 'vuex'
import SubHeader from "../components/SubHeader";
import BookItem from '../components/BookItem.vue';
export default {
  name: "book-detail",
  components: {
    SubHeader,
    BookItem
  },
  computed: {
    ...mapState("book", ["book"]),
  },
  async created() {
    const bookId = this.$route.params.id;
    await this.fetchBook(bookId);
  },
  methods: {
    ...mapActions("book", ["fetchBook"]),
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss">

</style>
