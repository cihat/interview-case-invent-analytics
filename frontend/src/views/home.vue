<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapState('account', ['user'])
  }
}
</script>
<template lang="pug">
.home
  h1 Library Automation
</template>

<style lang="scss" scoped>

</style>
