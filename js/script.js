const {createApp} = Vue;

createApp ({
    data() {
        return {
            title: "Sono un titolo",
            img: ("https://picsum.photos/200/300")
        }
    },
    methods: {

    }
}).mount("#app");