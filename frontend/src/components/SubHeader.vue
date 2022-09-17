<template lang="pug">
a-page-header(style='border: 1px solid rgb(235, 237, 240)' :title='title' :sub-title='subTitle' @back='() => $router.go(-1)')
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="scss">

</style>
