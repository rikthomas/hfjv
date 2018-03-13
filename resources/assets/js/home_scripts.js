Vue.component('form-field', {

	props: ['label', 'type', 'placeholder', 'name'],

	template: `
		<p class="control is-expanded">
          <label class="label">{{ label }}</label>
          <input :type="type" class="input" :placeholder="placeholder" :name="name" v-model="value" @blur="updateField">
        </p>
	`,

	data() {
		return {
			value: ''
		}
	},

	created() {
		this.value = patient[this.name];
	},

	methods: {
        updateField() {
        	let field = this.name;
            let newValue = (Number(this.value));
            axios.put('/patient/update/' + patient.id, {
                field: field,
                value: newValue,
            }).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });         
        },
    }
});

new Vue({
	el: '#app',
});