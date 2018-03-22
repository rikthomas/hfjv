<template>
	<div class="field">
		<input type="checkbox" class="is-checkradio" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" :id="name" v-model="value" @change="updateYN">
		<label :for="name">{{ label }}</label>
	</div>
</template>

<script>

export default {

		props: ['label', 'name'],

		data() {
			return{
				value: '',
				isSuccess: true,
			}
		},

		created() {
			this.value = patient[this.name];
			if (this.name=='mi') Event.$on('miCheck', (value) => { this.value = value });
			if (this.name=='cvs') Event.$on('miCheck', (value) => { this.value = value });
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
	                if (this.name=='cvs'){Event.$emit('cvsDrop', this.value);}
	                if (this.name=='resp'){Event.$emit('respDrop', this.value);}
	                if (this.name=='pft'){Event.$emit('pftDrop', this.value);}
	                if (this.name=='mi'){Event.$emit('miCheck', this.value);}
	              })
	              .catch(function (error) {
	                console.log(error);
	              });
			}
		}

	}


</script>