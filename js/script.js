// Pari dispari:
// 1. predisporre l'input dell'utente per chiedere un numero
// 2. al click sul bottone verificare se il numero è pari o dispari, facendo vedere il risultato in altert
// 3. Stampare il risultato in pagina
// 4. Colorare il testo stampato diversamente se pari o dispari

const {createApp} = Vue;

createApp ({
    data() {
        return {
            userNum: "",
            numResult: "",
            titleNum: "",
            img: ("https://picsum.photos/200/300")
        }
    },
    methods: {
        clickButton: function() {
            if (this.userNum % 2 === 0) {
                this.numResult = "pari";
            } else {
                this.numResult = "dispari"
            }
            this.titleNum = `Ciao! il tuo numero è ${this.numResult}!`
        }
    }
}).mount("#app");