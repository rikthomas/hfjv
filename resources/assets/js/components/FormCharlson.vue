<template>
<div>
	<div class="field is-grouped">
			<form-check-yes label="MI" name="mi" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="CCF" name="ccf" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="PVD" name="pvd" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="CVA" name="cvd" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="PUD" name="pud" :function="calcCharlson"></form-check-yes>
	</div>
	<div class="field is-grouped">
			<form-check-yes label="Leukaemia" name="leukaemia" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="Lymphoma" name="lymphoma" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="AIDS" name="aids" :function="calcCharlson"></form-check-yes>
	</div>
	<div class="field">
			<form-check-yes label="Chronic Pulmonary Disease" name="pulmonary" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="Connective Tissue Disease" name="tissue" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="Moderate to Severe Renal Failure" name="renal" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="Hemiplegia" name="hemiplegia" :function="calcCharlson"></form-check-yes>
			<form-check-yes label="Dementia" name="dementia" :function="calcCharlson"></form-check-yes>
	</div>
	
	<div class="field">
			<p class="control is-expanded">
			    <label class="label">Diabetes</label>
			    	<input class="is-checkradio" type="radio" v-model="diabetes" id="diabetes0" value=0 :disabled="disabled" :class="{'is-success': isSuccessD, 'is-danger': !isSuccessD}" @change="updateDiabetes">
			        <label for="diabetes0">No</label> 
			        <input class="is-checkradio" type="radio" v-model="diabetes" id="diabetes1" value=1 :disabled="disabled" :class="{'is-success': isSuccessD, 'is-danger': !isSuccessD}" @change="updateDiabetes">
			        <label for="diabetes1">Uncomplicated</label>
			        <input class="is-checkradio" type="radio" v-model="diabetes" id="diabetes2" value=2 :disabled="disabled" :class="{'is-success': isSuccessD, 'is-danger': !isSuccessD}" @change="updateDiabetes">
			        <label for="diabetes2">End-Organ Damage</label>   
			</p>
	</div>
	<div class="field">
			<p class="control is-expanded">
			    <label class="label">Solid Tumour</label>
			    	<input class="is-checkradio" type="radio" v-model="tumour" id="tumour0" value=0 :disabled="disabled" :class="{'is-success': isSuccessT, 'is-danger': !isSuccessT}" @change="updateTumour">
			        <label for="tumour0">No</label> 
			        <input class="is-checkradio" type="radio" v-model="tumour" id="tumour1" value=2 :disabled="disabled" :class="{'is-success': isSuccessT, 'is-danger': !isSuccessT}" @change="updateTumour">
			        <label for="tumour1">Yes</label>
			        <input class="is-checkradio" type="radio" v-model="tumour" id="tumour2" value=6 :disabled="disabled" :class="{'is-success': isSuccessT, 'is-danger': !isSuccessT}" @change="updateTumour">
			        <label for="tumour2">Metastatic</label>   
			</p>
	</div>
	<div class="field">
			<p class="control is-expanded">
			    <label class="label">Liver Disease</label>
			    	<input class="is-checkradio" type="radio" v-model="liver" id="liver0" value=0 :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLiver">
			        <label for="liver0">None</label> 
			        <input class="is-checkradio" type="radio" v-model="liver" id="liver1" value=1 :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLiver">
			        <label for="liver1">Mild</label>
			        <input class="is-checkradio" type="radio" v-model="liver" id="liver2" value=3 :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLiver">
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
				disabled: ''
			}
		},

		created() {
			this.liver = patient.liver;
			this.tumour = patient.tumour;
			this.diabetes = patient.diabetes;
			this.charlson = patient.charlson;
			this.tenyear = patient.tenyear;
			this.disabled = Event.disabled;
			Event.$on('enableForm', () => { this.disabled = Event.disabled });
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
	                this.calcCharlson();
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
	                this.calcCharlson();
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
	                this.calcCharlson();
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			},
			calcCharlson() {
			 if (patient.age < 50) {
			 	var age = 0;
			 } else if (patient.age >= 50 && patient.age < 60) {
			 	var age = 1;
			 } else if (patient.age >= 60 && patient.age < 70) {
			 	var age = 2;
			 } else if (patient.age >= 70 && patient.age < 80) {
			 	var age = 3;
			 } else {
			 	var age = 4;
			 }
			 var mi = patient.mi==1 ? 1 : 0;
			 var ccf = patient.ccf==1 ? 1 : 0;
			 var pvd = patient.pvd==1 ? 1 : 0;
			 var cvd = patient.cvd==1 ? 1 : 0;
			 var pud = patient.pud==1 ? 1 : 0;
			 var leukaemia = patient.leukaemia==1 ? 2 : 0;
			 var lymphoma = patient.lymphoma==1 ? 2 : 0;
			 var aids = patient.aids==1 ? 6 : 0;
			 var pulmonary = patient.pulmonary==1 ? 1 : 0;
			 var tissue = patient.tissue==1 ? 1 : 0;
			 var renal = patient.renal==1 ? 2 : 0;
			 var hemiplegia = patient.hemiplegia==1 ? 2 : 0;
			 var dementia = patient.dementia==1 ? 1 : 0;
			 var diabetes = isNaN(parseInt(patient.diabetes)) ? 0 : parseInt(patient.diabetes);
			 var tumour = isNaN(parseInt(patient.tumour)) ? 0 : parseInt(patient.tumour);
			 var liver = isNaN(parseInt(patient.liver)) ? 0 : parseInt(patient.liver);
			 var cci = (age + mi + ccf + pvd + cvd + pud + leukaemia + lymphoma + aids
			 	+ pulmonary + tissue + renal + hemiplegia + dementia + diabetes + tumour + liver);
			 // console.log('age:' + age);
			 // console.log('mi:' + mi);
			 // console.log('ccf:' + ccf);
			 // console.log('pvd:' + pvd);
			 // console.log('cvd:' + cvd);
			 // console.log('pud:' + pud);
			 // console.log('leukaemia:' + leukaemia);
			 // console.log('lymphoma:' + lymphoma);
			 // console.log('aids:' + aids);
			 // console.log('pulmonary:' + pulmonary);
			 // console.log('tissue:' + tissue);
			 // console.log('renal:' + renal);
			 // console.log('hemiplegia:' + hemiplegia);
			 // console.log('dementia:' + dementia);
			 // console.log('diabetes:' + diabetes);
			 // console.log('tumour:' + tumour);
			 // console.log('liver:' + liver);
			 var ten = Math.exp(cci*0.9);
			 var teny = 100*(Math.pow(0.983, ten));
			 var tenyear = Math.round( teny * 10 ) / 10;
			 this.charlson = cci;
			 this.tenyear = tenyear;

		},
	},
	watch: {
		charlson: function() {
			if(isFinite(this.charlson)){
			axios.put('/patient/update/' + patient.id, {
	                field: 'charlson',
	                value: this.charlson,
	            })
			}
		},
		tenyear: function () {
			if(isFinite(this.tenyear)){
			axios.put('/patient/update/' + patient.id, {
	                field: 'tenyear',
	                value: this.tenyear,
	            })
			}
		}
	}
}

</script>