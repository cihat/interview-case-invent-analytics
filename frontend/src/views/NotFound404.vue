<template lang="pug">
a-result(status='404' title='404' sub-title='Sorry, the page you visited does not exist.')
  template(#extra='')
    a-button(type='primary')
      router-link(to='/')
        | Back Home
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
