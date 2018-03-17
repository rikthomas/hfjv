<template>
	<p class="control is-expanded">
		    <label class="label">ASA</label>
		      <label class="radio">
		        <input type="radio" v-model="asa" value="1" @change="updateAsa">
		        1
		      </label>
		      <label class="radio">
		        <input type="radio" v-model="asa" value="2" @change="updateAsa">
		        2
		      </label>
		      <label class="radio">
		        <input type="radio" v-model="asa" value="3" @change="updateAsa">
		        3
		      </label>
		      <label class="radio">
		        <input type="radio" v-model="asa" value="4" @change="updateAsa">
		        4
		      </label>
		      <label class="radio">
		        <input type="radio" v-model="asa" value="5" @change="updateAsa">
		        5
		      </label>&nbsp
		      <i class="fas fa-check" style="color:green" v-if="isTicked"></i>	      
		</p>
</template>

<script>

	export default {

		data() {
			return {
				asa: '',
				isTicked: false
			}
		},

		created() {
			this.asa = patient.asa;
		},

		methods: {
			updateAsa()
			{
	        	let newValue = this.asa;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'asa',
	                value: newValue,
	            }).then(() => {
	                this.isTicked = true;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			}
		},


	}

</script>