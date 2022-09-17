<template lang="pug">
.container(v-infinite-scroll="handleInfiniteOnLoad" class="demo-infinite-container" :infinite-scroll-disabled="busy" :infinite-scroll-distance="10")
  h3 Borrowed {{borrowedBooks.length}} books
  a-list(item-layout='horizontal' :data-source='borrowedBooks')
    a-list-item(slot='renderItem' slot-scope='item, index')
      a-list-item-meta(:description='item.description')
        a(slot='title' href='https://www.antdv.com/') {{ item.title }}
        a-avatar(slot='avatar' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png')
  h3 Currently recevied {{receivedBooks.length}} books
  a-list(item-layout='horizontal' :data-source='receivedBooks')
    a-list-item(slot='renderItem' slot-scope='item, index')
      a-list-item-meta(:description='item.description')
        a(slot='title' href='https://www.antdv.com/') {{ item.title }}
        a-avatar(slot='avatar' src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png')
</template>
<script>

export default {
  data() {
    return {
    };
  },
  props: {
    receivedBooks: {
      type: Array,
      required: true,
    },
    borrowedBooks: {
      type: Array,
      required: true,
    }
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.demo-infinite-container {
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  overflow: auto;
  padding: 8px 24px;
  height: 550px;
}

.demo-loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}
</style>
