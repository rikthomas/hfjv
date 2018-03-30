<template>
	<article class="message is-link">
		<div class="message-header">
			<p>ECOG Performance Status</p>
		</div>
		<div class="message-body">
			<div class="field">
				<input class="is-checkradio" id="ecog1" type="radio" v-model="ecog" value="1" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateEcog">
		        <label for="ecog1">Fully active, able to carry on all pre-disease performance without restriction</label>	
			</div>
			<div class="field">
				<input class="is-checkradio" id="ecog2" type="radio" v-model="ecog" value="2" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateEcog">
		        <label for="ecog2">Restricted in physically strenuous activity but ambulatory and able to carry out work of a light or sedentary nature, e.g. light house work, office work</label>	
			</div>
			<div class="field">
				<input class="is-checkradio" id="ecog3" type="radio" v-model="ecog" value="3" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateEcog">
		        <label for="ecog3">Ambulatory and capable of all selfcare but unable to carry out any work activities; up and about more than 50% of waking hours</label>	
			</div>
			<div class="field">
				<input class="is-checkradio" id="ecog4" type="radio" v-model="ecog" value="4" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateEcog">
		        <label for="ecog4">Capable of only limited selfcare; confined to bed or chair more than 50% of waking hours</label>	
			</div>
			<div class="field">
				<input class="is-checkradio" id="ecog5" type="radio" v-model="ecog" value="5" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateEcog">
		        <label for="ecog5">Completely disabled; cannot carry on any selfcare; totally confined to bed or chair</label>	
			</div>
			<div class="field">
				<input class="is-checkradio" id="ecog6" type="radio" v-model="ecog" value="6" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateEcog">
		        <label for="ecog6">Dead</label>	
			</div>
		</div>
	</article>
</template>

<script>

export default {

	data() {
			return {
				ecog: '',
				isSuccess: true,
				disabled: ''
			}
		},

	created() {
			this.ecog = patient.ecog;
			this.disabled = Event.disabled;
			Event.$on('enableForm', () => { this.disabled = Event.disabled });
		},

		methods: {
			updateEcog()
			{
	        	this.isSuccess = false;
	        	let newValue = this.ecog;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'ecog',
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