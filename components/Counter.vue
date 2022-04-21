<template lang="pug">
    div.wrapper
        h1 Count
        p {{count}}
        button(v-on:click="increaseCount") Increase count
</template>
<script>
export default {
    data: function() {
        return {
            count: this.$store.state.counter
        }
    },
    methods: {
        increaseCount: function () {
            this.count = this.count + 1
            this.$store.commit('increment')
        }
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