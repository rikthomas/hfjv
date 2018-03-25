<template>
	<div>
		<label class="label">{{ label }}</label>
		<div class="select" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}">
			<select v-model="value" @change="updateField">
				<option v-for="item in data" :value="item.value">{{ item.text }}</option>
			</select>
		</div>
</div>
</template>

<script>
	export default {

		props: ['label', 'name', 'data', 'function'],

		data() {
			return {
				value: '',
				isSuccess: true
			}
		},

		created() {
			this.value = patient[this.name];
		},

		methods: {
			updateField()
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
	                this.function();
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			}
		},

	}
</script>

