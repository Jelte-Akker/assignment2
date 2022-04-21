<template lang="pug">
    div.wrapper
        Links
        div.form
            h1 Form
            input(v-model="firstName" placeholder="First name") 
            input(v-model="lastName" placeholder="Last name")
            textarea(v-model="message" auto-grow placeholder="Describe yourself")
            button(v-on:click="submitForm") Submit
            p {{response["echo"]}}
</template>
<script>
import Links from '@/components/Links';
export default {
    name: 'formPage',
    data: function() {
        return {
            firstName: '',
            lastName: '',
            message: '',
        }
    },
    computed: { 
        response: function () {
            return this.$store.state.response
        }
    },
    methods: {
        submitForm: function () {
            let form = {
                firstName: this.firstName,
                lastName: this.lastName,
                message: this.message
            } 
            this.$store.dispatch("echo", form)
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
.form{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20%;
    & * {
        margin: 5px;
    }
}
  & p {
    color: gray
  }
}
</style>