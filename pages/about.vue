<template lang="pug">
    div.wrapper
        Links

        h1 About
        p {{message}}
</template>
<script>
import Links from '@/components/Links';
export default {
    name: 'aboutPage',
    data: function() {
        return {
            message: "Not much the tell about this"
        }
    },
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