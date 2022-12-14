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
            titleClass: "",
            img: ("https://picsum.photos/200/300")
        }
    },
    methods: {
        clickButton: function() {
            // if (this.userNum % 2 === 0) {
            //     this.numResult = "pari";
            //     this.titleClass = "blue";
            // } else {
            //     this.numResult = "dispari";
            //     this.titleClass = "pink";
            // }
            this.userNum % 2 === 0 ? this.numResult = "pari" : this.numResult = "dispari";
            this.userNum % 2 === 0 ? this.titleClass = "blue" : this.titleClass = "pink";
            this.titleNum = `Ciao! il tuo numero è ${this.numResult}!`
        }
    }
}).mount("#app");