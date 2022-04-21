<template lang="pug">
    div.wrapper
        Links

        h1 Add message
        textarea(v-model="message" placeholder="Type message here")
        button(v-on:click="addMessage") add message
</template>
<script>
import Links from '@/components/Links';
export default {
    name: 'addPage',
    props: ['message'],
    methods: {
        addMessage: function () {
            this.$store.commit('addMessage', this.message)
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