const app = new Vue(
    {
        el: '#app',
        data: {
            emails: []
        },
        mounted() {
            
            for (let i = 0; i <= 9; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((risposta) => {
                        this.emails.push(risposta.data.response) 
                    })
            }
            
        }
    }
)