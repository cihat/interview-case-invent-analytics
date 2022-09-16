<script>
import Header from '../components/Header'
export default {
  name: 'home-layout',
  components: {
    Header,
  },
}
</script>
  
<template lang="pug">
.home-layout
  //- Header
  router-view
  </template>
  
<style lang="scss" scoped>
.home-layout {
  min-height: 100vh;
  background-color: #f5f6f8;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
}
</style>