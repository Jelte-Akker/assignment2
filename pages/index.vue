<template lang="pug">
  div.wrapper
    Links

    h1 Home
    p This is the homepage
</template>

<script>
import Links from '@/components/Links';
export default {
  name: 'IndexPage',
  components: {
    Links
  }
}
</script>
<style scoped lang="scss">
.wrapper {
  & h1 {
    color: black;
    &:hover {
      color: red;
  }
}
  & p {
    color: gray
  }
}
</style>