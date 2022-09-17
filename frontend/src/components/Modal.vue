<template lang="pug">
div
  a-button(type='primary' @click='showModal') Add Todo
  a-modal(title='Title' :visible='visible' :confirm-loading='confirmLoading' @ok='handleOk' @cancel='handleCancel')
    CreateBook
</template>
<script>
import CreateBook from "../components/CreateBook.vue"

export default {
  components: {
    CreateBook
  },
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  },
};
</script>
