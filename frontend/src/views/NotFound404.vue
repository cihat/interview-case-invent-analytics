<template lang="pug">
a-result(status='404' title='404' sub-title='Sorry, the page you visited does not exist.')
  template(#extra='')
    a-button(type='primary' @click='() => $router.go(-1)') Previous Page
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
