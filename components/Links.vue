<template lang="pug">
    div.wrapper
        nuxt-link(to="/") Home
        nuxt-link(to="/count") Counter
        nuxt-link(to="/message/add") New message
        nuxt-link(to="/message/read") See messages
        nuxt-link(to="/form") Form
        nuxt-link(to="/about") About
</template>
<script>
export default {

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