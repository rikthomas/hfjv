<template>
<div>
	<div class="field is-grouped">
			<form-check-yes label="MI" name="mi"></form-check-yes>
			<form-check-yes label="CCF" name="ccf"></form-check-yes>
			<form-check-yes label="PVD" name="pvd"></form-check-yes>
			<form-check-yes label="CVD" name="cvd"></form-check-yes>
	</div>
	<div class="field is-grouped">
			<form-check-yes label="Dementia" name="dementia"></form-check-yes>
			<form-check-yes label="Chronic Pulmonary Disease" name="pulmonary"></form-check-yes>
	</div>
	<div class="field is-grouped">
			<form-check-yes label="Connective Tissue Disease" name="tissue"></form-check-yes>
			<form-check-yes label="PUD" name="pud"></form-check-yes>
	</div>
	<div class="field is-grouped">
			<form-check-yes label="Moderate to Severe RF" name="renal"></form-check-yes>
			<form-check-yes label="Hemiplegia" name="hemiplegia"></form-check-yes>
	</div>
	<div class="field is-grouped">
			<form-check-yes label="Leukaemia" name="leukaemia"></form-check-yes>
			<form-check-yes label="Lymphoma" name="lymphoma"></form-check-yes>
			<form-check-yes label="AIDS" name="aids"></form-check-yes>
	</div>
	<div class="field">
			<p class="control is-expanded">
			    <label class="label">Diabetes</label>
			    	<input class="is-checkradio" type="radio" v-model="diabetes" id="diabetes0" value=0 :class="{'is-success': isSuccessD, 'is-danger': !isSuccessD}" @change="updateDiabetes">
			        <label for="diabetes0">No</label> 
			        <input class="is-checkradio" type="radio" v-model="diabetes" id="diabetes1" value=1 :class="{'is-success': isSuccessD, 'is-danger': !isSuccessD}" @change="updateDiabetes">
			        <label for="diabetes1">Uncomplicated</label>
			        <input class="is-checkradio" type="radio" v-model="diabetes" id="diabetes2" value=2 :class="{'is-success': isSuccessD, 'is-danger': !isSuccessD}" @change="updateDiabetes">
			        <label for="diabetes2">End-Organ Damage</label>   
			</p>
	</div>
	<div class="field">
			<p class="control is-expanded">
			    <label class="label">Solid Tumour</label>
			    	<input class="is-checkradio" type="radio" v-model="tumour" id="tumour0" value=0 :class="{'is-success': isSuccessT, 'is-danger': !isSuccessT}" @change="updateTumour">
			        <label for="tumour0">No</label> 
			        <input class="is-checkradio" type="radio" v-model="tumour" id="tumour1" value=2 :class="{'is-success': isSuccessT, 'is-danger': !isSuccessT}" @change="updateTumour">
			        <label for="tumour1">Yes</label>
			        <input class="is-checkradio" type="radio" v-model="tumour" id="tumour2" value=6 :class="{'is-success': isSuccessT, 'is-danger': !isSuccessT}" @change="updateTumour">
			        <label for="tumour2">Metastatic</label>   
			</p>
	</div>
	<div class="field">
			<p class="control is-expanded">
			    <label class="label">Liver Disease</label>
			    	<input class="is-checkradio" type="radio" v-model="liver" id="liver0" value=0 :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLiver">
			        <label for="liver0">None</label> 
			        <input class="is-checkradio" type="radio" v-model="liver" id="liver1" value=1 :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLiver">
			        <label for="liver1">Mild</label>
			        <input class="is-checkradio" type="radio" v-model="liver" id="liver2" value=3 :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLiver">
			        <label for="liver2">Moderate to Severe</label>   
			</p>
	</div>
	<div class="field is-grouped">
		<p class="control is-expanded">
          <label class="label">Charslon Score</label>
          <input type="number" class="input" name="charslon" v-model="charlson" disabled>
        </p>
        <p class="control is-expanded">
          <label class="label">10 Year Survival %</label>
          <input type="number" class="input" name="tenyear" v-model="tenyear" disabled>
        </p>	
    </div>
</div>
</template>

<script>

import FormField from './FormField.vue';
	import FormYesNo from './FormYesNo.vue';
	import FormCheckYes from './FormCheckYes.vue';
	import FormFieldNoLabel from './FormFieldNoLabel';
	export default {

		data() {
			return {
				liver: '',
				tumour: '',
				diabetes: '',
				isSuccess: true,
				isSuccessT: true,
				isSuccessD: true,
				charlson: '',
				tenyear: '',
			}
		},

		created() {
			this.liver = patient.liver;
			this.tumour = patient.tumour;
			this.diabetes = patient.diabetes;
		},

		methods: {
			updateLiver()
			{
	        	this.isSuccess = false
	        	let newValue = this.liver;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'liver',
	                value: newValue,
	            }).then(() => {
	                this.isSuccess = true;
	                patient.liver = newValue;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			},
			updateDiabetes()
			{
	        	this.isSuccessD = false
	        	let newValue = this.diabetes;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'diabetes',
	                value: newValue,
	            }).then(() => {
	                this.isSuccessD = true;
	                patient.diabetes = newValue;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			},
			updateTumour()
			{
	        	this.isSuccessT = false
	        	let newValue = this.tumour;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'tumour',
	                value: newValue,
	            }).then(() => {
	                this.isSuccessT = true;
	                patient.tumour = newValue;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			}
		},


}

</script>