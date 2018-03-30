<template>
	<p class="control is-expanded">
		    <label class="label has-text-info">ASA</label>	      
		        <input class="is-checkradio" :disabled="disabled" id="asa1" type="radio" v-model="asa" value="1" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateAsa">
		        <label for="asa1">1</label>		      
		        <input class="is-checkradio" :disabled="disabled" id="asa2" type="radio" v-model="asa" value="2" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateAsa">
		        <label for="asa2">2</label>		      
		        <input class="is-checkradio" :disabled="disabled" id="asa3" type="radio" v-model="asa" value="3" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateAsa">
		        <label for="asa3">3</label>		      
		        <input class="is-checkradio" :disabled="disabled" id="asa4" type="radio" v-model="asa" value="4" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateAsa">
		        <label for="asa4">4</label>		      
		        <input class="is-checkradio" :disabled="disabled" id="asa5" type="radio" v-model="asa" value="5" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateAsa">
		        <label for="asa5">5</label>
		</p>
</template>

<script>
	export default {

		data() {
			return {
				asa: '',
				isSuccess: true,
				disabled: ''
			}
		},

		created() {
			this.asa = patient.asa;
			this.disabled = Event.disabled;
			Event.$on('enableForm', () => { this.disabled = Event.disabled });
		},

		methods: {
			updateAsa()
			{
	        	this.isSuccess = false;
	        	let newValue = this.asa;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'asa',
	                value: newValue,
	            }).then(() => {
	                this.isSuccess = true;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			}
		},


	}

</script>