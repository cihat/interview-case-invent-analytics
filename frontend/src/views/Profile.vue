<template lang="pug">
.container
  SubHeader(:title='user.name' :sub-title='user.username')
</template>
<script>
import { mapState } from 'vuex'
import SubHeader from "../components/SubHeader";

export default {
  name: 'profile',
  data() {
    return {};
  },
  components: {
    SubHeader
  },
  computed: {
    ...mapState('account', ['user'])
  }


}
</script>
<style lang="scss">

</style>
