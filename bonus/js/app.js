const { createApp } = Vue

// console.log(axios)

createApp({

	data() {
		return {
			emails: [],
			allEmails: false,
		}
	},

	methods: {

		fetchEmails() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((res) => {
					console.log(res.data.response)
					this.emails.push(res.data.response)

					if (this.emails.length === 10) {

						this.allEmails = true
					}
				})
		},
	},

	mounted() {
		for (let i = 0; i < 10; i++) {
			this.fetchEmails()
		}
	},

}).mount('#app')