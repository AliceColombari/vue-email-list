// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// BONUS - Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const app = new Vue(
    {
        el: '#app',
        data: {
            emails: []
        },
        methods: {
            randomEmailPush() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((risposta) => {
                        // con successo
                    this.emails.push(risposta.data.response) 
                    })
                    .catch((error) => {
                        // insuccesso error
                        console.log(error);
                    });  
            },

            // stampa 10 indirizzi email random
            tenrandomEmailPush() {
                for (let i = 0; i < 10; i++) {
                    this.randomEmailPush();
                }
            }
        },
        mounted() {
            this.tenrandomEmailPush();
        }
    }
)