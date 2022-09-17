<template lang="pug">
.container
  SubHeader(:title='user.name' :sub-title='user.username')
  a-row(:gutter="16")
    a-col(:span='10' class="gutter-row")
      a-card(hoverable='' class="gutter-box" style="width: full")
        .avatar_image_wrapper
          a-avatar( :size="256" icon="user")
        template.ant-card-actions(slot='actions')
          a-icon(key='setting' type='setting')
            a-icon(key='edit' type='edit')
              a-icon(key='ellipsis' type='ellipsis')
        a-descriptions(title='User Info')
          a-descriptions-item(label='UserName')
            | {{ user.username }}
          a-descriptions-item(label='E-mail')
            | {{ user.email }}
          a-descriptions-item(label='Live')
            | Hangzhou, Zhejiang
          a-descriptions-item(label='Remark')
            | empty
          a-descriptions-item(label='Address')
            | No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China

    a-col(:span='14' class="gutter-row")
      BookList(:borrowedBooks='user.borrowedBooks' :receivedBooks='user.receivedBooks')


</template>
<script>
import { mapState } from 'vuex'
import SubHeader from "../components/SubHeader";
import BookList from '../components/BookList.vue';

export default {
  name: 'profile',
  data() {
    return {};
  },
  components: {
    SubHeader,
    BookList
  },
  computed: {
    ...mapState('account', ['user'])
  }


}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
}
.avatar_image_wrapper {
  margin-bottom: 20px;
}
</style>
