Vue.component('form-field', {

	props: ['label', 'type', 'placeholder', 'name'],

	template: `
		<p class="control is-expanded">
          <label class="label">{{ label }}</label>
          <input :type="type" class="input" :class="{'is-success': isSaved, 'is-danger': isDirty}"  :placeholder="placeholder" :name="name" v-model="value" @blur="updateField" @keyup="dirtyCheck">
        </p>
	`,

	data() {
		return {
			value: '',
			isDirty: false,
			isSaved: false,
		}
	},

	created() {
		this.value = patient[this.name];
	},

	methods: {
        updateField() 
        	{
        	if (this.value != patient[this.name]) {
	        	let field = this.name;
	            let newValue = this.value;
	            axios.put('/patient/update/' + patient.id, {
	                field: field,
	                value: newValue,
	            }).then(() => {
	                this.isDirty = false;
	                this.isSaved = true;
	                //patient[this.name] = newValue;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
	        }
	    },
        dirtyCheck() {
        	this.isDirty = this.value != patient[this.name] ? true : false;
        }
    }
});

new Vue({
	el: '#app',
});