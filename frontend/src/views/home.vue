<script>
import { mapActions } from 'vuex'
import SettingsPopup from "../components/Header/settings-popup.vue"

export default {
  name: 'Home',
  components: {
    SettingsPopup
  },
  created() {
    this.fetchUsers()
    console.log('home page created')
  },
  methods: {
    ...mapActions(['fetchUsers', ]),
  },
}
</script>

<template lang="pug">
div
  h1 Test
  h2 {{ message }}
  settings-popup
</template>
