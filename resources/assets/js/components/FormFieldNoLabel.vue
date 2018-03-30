<template>
	<p class="control is-expanded">
      <input :type="type" class="input" :class="{'is-success': isSaved, 'is-danger': isDirty}"  :placeholder="placeholder" :disabled="disabled" :name="name" v-model="value" @blur="updateField" @keyup="dirtyCheck">
    </p>
</template>

<script>

	export default {

		props: ['type', 'placeholder', 'name'],

		data() {
			return {
				value: '',
				isDirty: false,
				isSaved: false,
				disabled: '',
			}
		},

		created() {
			this.value = patient[this.name];
			this.disabled = Event.disabled;
			Event.$on('enableForm', () => { this.disabled = Event.disabled });
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

	}

</script>