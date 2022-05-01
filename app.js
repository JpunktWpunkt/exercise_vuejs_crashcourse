const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const response = await fetch('https://randomuser.me/api')
            const {results} = await response.json()

            console.log(results)
            this.firstName = 'Sam'
            this.lastName = 'Doe'
            this.email = 'sam@gmail.com'
            this.gender = 'female'
            this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        },
    },
})

app.mount('#app')