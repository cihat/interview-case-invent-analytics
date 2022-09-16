<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters('user', ['isLoggedIn', "user"]),
    selectedKeys() {
      return [this.$route.name] || ["home"]
    },
    layout() {
      return `${this.$route.meta.layout || 'home'}-layout`
    },
  },
  async created() {
    await this.init()
    console.log("user", this.user)
    // !this.isLoggedIn ? this.$router.push({ path: '/login' }) : this.$router.push({ path: '/' })
  },
  methods: {
    ...mapActions('user', ['init']),
  },
}
</script>
  
<template lang="pug">
#app
  .layout-wrapper
    component(:is='layout' :selectedKeys="selectedKeys")
  </template>
  
<style lang="scss">
@import '@/assets/theme.scss';
</style>