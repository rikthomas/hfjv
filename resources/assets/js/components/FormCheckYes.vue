<template>
	<div class="field">
		<input type="checkbox" class="is-checkradio" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" :id="name" :disabled="disabled" v-model="value" @change="updateYN">
		<label :for="name">{{ label }}</label>
	</div>
</template>

<script>

export default {

		props: ['label', 'name', 'function'],

		data() {
			return{
				value: '',
				isSuccess: true,
				disabled: '',
			}
		},

		created() {
			this.value = patient[this.name];
			this.disabled = Event.disabled;
			Event.$on('enableForm', () => { this.disabled = Event.disabled });
		},

		methods: {
			updateYN()
			{
				this.isSuccess = false;
				let field = this.name;
				let newValue = this.value;
	            axios.put('/patient/update/' + patient.id, {
	                field: field,
	                value: newValue,
	            }).then(() => {
	            	this.isSuccess = true;
	            	patient[this.name] = newValue;
	            	if (this.name=='proceed'){Event.$emit('proceedDrop', this.value);}
	                if (this.name=='cvs'){Event.$emit('cvsDrop', this.value);}
	                if (this.name=='resp'){Event.$emit('respDrop', this.value);}
	                if (this.name=='pft'){Event.$emit('pftDrop', this.value);}
	                if (this.name=='mi' || this.name=='ccf' || this.name=='pvd' || this.name=='cvd' || this.name=='pud'
	                	|| this.name=='leukaemia' || this.name=='lymphoma' || this.name=='aids' || this.name=='pulmonary'
	                	|| this.name=='tissue' || this.name=='renal' || this.name=='hemiplegia' || this.name=='dementia') {
	                	this.function();
	                }
	                if (this.name=='hfjvuse'){Event.$emit('hfjvDrop', this.value);}
	                if (this.name=='ippv'){Event.$emit('ippvDrop', this.value);}
	                if (this.name=='complication'){Event.$emit('compxDrop', this.value);}
	                if (this.name=='postopmorphine'){Event.$emit('oralDrop', this.value);}
	              })
	              .catch(function (error) {
	                console.log(error);
	              });
			}
		}

	}


</script>