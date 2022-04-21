<template lang="pug">
  div.wrapper
    Links
    
    Counter
  
</template>
<script>
import Counter from '@/components/Counter';
import Links from '@/components/Links';
export default {
  name: 'countPage',
  components: {
    Counter,
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