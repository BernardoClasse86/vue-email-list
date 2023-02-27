const { createApp } = Vue

// console.log(axios)

createApp({

	data() {
		return {
			emails: [],
		}
	},

	methods: {

		fetchEmails() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					console.log(res.data.response)
					this.emails.push(res.data.response)
				})
		},
	},

	mounted() {
		for (let i = 0; i < 10; i++) {
			this.fetchEmails()
		}
	},

}).mount('#app')