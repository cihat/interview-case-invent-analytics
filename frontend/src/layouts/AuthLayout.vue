<script>
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import { mapGetters } from 'vuex'
import Icon from '../components/Icon'
export default {
  name: 'auth-layout',
  components: {
    Login,
    Register,
    Icon,
  },
  computed: {
    ...mapGetters('user', ['isLoggedIn']),
  },
}
</script>
  
<template lang="pug">
.container
  .auth-layout
    .header-wrapper
      .github-link
        a(href="https://github.com/cihat/internview-case-invent-analytics" target='_blank')
          icon(icon='github' :size="60" color="#fff") 
      .library-logo
        img(src="../assets/images/book-image.png", alt="Library Image")
    router-view
</template>
  
<style lang="scss" scoped>
.auth-layout {
  max-height: 100vh;
  // max-width: 1140px;
  margin: 0 auto;
  display: grid;
  // grid-template-columns: 1fr;
  grid-template-rows: 1fr 2.5fr 7fr;
  background: top no-repeat url("../assets/images/library.jpeg"),
    #eee 35%;

  .header-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    max-height: 100px;

    .library-logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 16px;

      img {
        max-width: 100px;
        max-height: 100px;

        width: 100%;
        height: auto;
      }
    }
  }
}
</style>