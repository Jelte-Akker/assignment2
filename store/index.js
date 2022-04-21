export const state = () => ({
    counter: 0,
    messages: [],
    response: ''
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    addMessage(state, newMessage) {
        state.messages.push(newMessage)
    },
    setEchoResponse(state, data) {
        state.response = data
    }
}

export const actions = {
    async echo ({ commit }, formData) {
        let data = {
            echo: formData
        }
        let options = {
            url: "https://86a4h9y007.execute-api.eu-west-1.amazonaws.com/development/echo",
            method: "POST",
            headers: {
                "x-api-key": process.env.API_KEY
            },
            data
        }
        let response = await this.$axios(options);
        commit('setEchoResponse', response.data);
    }
}