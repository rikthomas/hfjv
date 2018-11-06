<template>
	<article class="message is-success">
		<div class="message-header">
			<p>Follow Up</p>
		</div>
		<div class="message-body">
			<div class="field is-grouped">
				<form-field label="Length of Stay" type="text" placeholder="in days, if still inpt: enter > 30" name="los"></form-field>
				<p class="control is-expanded">
				    <label class="label">Discharge Status</label>
				    	<input class="is-checkradio" type="radio" v-model="discharge" id="discharge0" value="alive" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateDischarge">
				        <label for="discharge0">Alive</label> 
				        <input class="is-checkradio" type="radio" v-model="discharge" id="discharge1" value="dead" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateDischarge">
				        <label for="discharge1">Dead</label> 
				</p>
			</div>
			<div class="field">
				<form-check-yes label="Unplanned ICU admission" name="unplannedicu" :function="dummy"></form-check-yes>
				<form-check-yes label="Repeat procedure or complication" name="complication" :function="dummy"></form-check-yes>
			</div>
			<div class="field" v-show="compx">
				<form-check-yes label="Haematoma requiring unplanned drainage" name="haemothorax" :function="dummy"></form-check-yes>
				<form-check-yes label="PTX requiring unplanned drainage" name="ptx" :function="dummy"></form-check-yes>
				<form-check-yes label="Cardiovascular instability" name="cvsunstable" :function="dummy"></form-check-yes>
				<form-field label="Other" type="text" placeholder="" name="othercomplication"></form-field>
			</div>
			<div class="field is-grouped">
				<form-check-yes label="Morphine/opiates required in the 24 hours post-procedure (excluding recovery)" name="postopmorphine" :function="dummy"></form-check-yes>
				<form-field label="How much (morphine equivalent)?" type="number" placeholder="in mg" name="postopmorphineamount" v-if="oralequivalent"></form-field>
			</div>
			<div class="field">
				<form-check-yes label="Follow up complete" name="fucomplete" :function="dummy"></form-check-yes>
			</div>
		</div>
	</article>
</template>

<script>
	import FormField from './FormField.vue';
	import FormYesNo from './FormYesNo.vue';
	import FormSelect from './FormSelect.vue';

	export default {
		data() {
			return {
				discharge: '',
				isSuccess: true,
				disabled: '',
				compx: '',
				oralequivalent: '',
			}
		},
		created() {
			this.discharge = patient.discharge;
			this.disabled = Event.disabled;
			this.compx = patient.complication==1 ? true : false;
			this.oralequivalent = patient.postopmorphine==1 ? true : false;
			Event.$on('enableForm', () => { this.disabled = Event.disabled });
			Event.$on('compxDrop', (value) => { this.compx = value });
			Event.$on('oralDrop', (value) => { this.oralequivalent = value});
		},
		methods: {
			updateDischarge()
			{
	        	this.isSuccess = false
	        	let newValue = this.discharge;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'discharge',
	                value: newValue,
	            }).then(() => {
	                this.isSuccess = true;
	                patient.discharge = newValue;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			},
			dummy() {

			},
		},
	}


</script>