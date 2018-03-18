<template>
		<p class="control is-expanded">
			<label class="label">{{ label }}</label>
			<label class="radio">
		        <input type="radio" v-model="value" :name="name" value="yes" @change="updateYN">
		        Yes
		      </label>
		      <label class="radio">
		        <input type="radio" v-model="value" :name="name" value="no" @change="updateYN">
		        No
		    </label>&nbsp
		    <i class="fas fa-check" style="color:green" v-if="isTicked"></i>
		</p>
</template>

<script>

	export default {

		props: ['label', 'name', 'checked'],

		data() {
			return{
				value: '',
				isTicked: false
			}
		},

		created() {
			this.value = patient[this.name];
		},

		methods: {
			updateYN()
			{
				let field = this.name;
				let newValue = this.value;
	            axios.put('/patient/update/' + patient.id, {
	                field: field,
	                value: newValue,
	            }).then(() => {
	            	patient[this.name] = newValue;
	                this.isTicked = true;
	                if (this.name=='cvs'){Event.$emit('cvsDrop', this.value);}
	              })
	              .catch(function (error) {
	                console.log(error);
	              });
			}
		}

	}


</script>