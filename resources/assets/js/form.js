window.Event = new Vue();

Vue.component('form-field', require('./components/FormField.vue'));

Vue.component('form-asa', require('./components/FormAsa.vue'));

Vue.component('form-yes-no', require('./components/FormYesNo.vue'));

new Vue({
	el: '#app',

	data: {
		weight: '',
		height: '',
	},

	created() {
		Event.$on('weight', (weight) => { this.weight = weight });
		Event.$on('height', (height) => { this.height = height });
	},
	computed: {
		bmi: function () {
			 return (this.weight/Math.pow((this.height/100), 2)).toFixed(0);
		}
	},
	watch: {
		bmi: function() {
			axios.put('/patient/update/' + patient.id, {
	                field: 'bmi',
	                value: this.bmi,
	            })
		}
	}
});