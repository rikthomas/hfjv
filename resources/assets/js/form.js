window.Event = new Vue();

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
		if (this.name=='weight'){Event.$emit('weight', this.value);}
		if (this.name=='height'){Event.$emit('height', this.value);}
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
	                patient[this.name] = newValue;
	                if (this.name=='weight'){Event.$emit('weight', this.value);}
					if (this.name=='height'){Event.$emit('height', this.value);}
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

Vue.component('form-preassess', {

	template: `
		<p class="control">
		    <label class="label">ASA</label>
		      <label class="radio">
		        <input type="radio" name="asa">
		        1
		      </label>
		      <label class="radio">
		        <input type="radio" name="asa">
		        2
		      </label>
		      <label class="radio">
		        <input type="radio" name="asa">
		        3
		      </label>
		      <label class="radio">
		        <input type="radio" name="asa">
		        4
		      </label>
		      <label class="radio">
		        <input type="radio" name="asa">
		        5
		      </label>
		</p>
	`

});

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
			 return (this.weight/Math.pow((this.height/100), 2)).toFixed(1);
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