<template lang="pug">
    div.wrapper
        Links

        h1 Read messages
        li(v-for="message in messages" :key="message") {{ message }}
</template>
<script>
import Links from '@/components/Links';
export default {
    name: 'readPage',
    data: function() {
        return {
            messages: this.$store.state.messages
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