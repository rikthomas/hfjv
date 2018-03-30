<template>
	<div>
		<div class="field is-grouped">
			<form-check-yes label="Hypertension" name="ht"></form-check-yes>
			<form-field-no-label type="number" placeholder="number of antihypertensives" name="antiht"></form-field-no-label>
		</div>
		<div class="field is-grouped">
			<form-check-yes label="Any stents?" name="stents"></form-check-yes>
			<form-check-yes label="Previous CVA?" name="cva"></form-check-yes>
		</div>
		<div class="field">
			<p class="control is-expanded">
			    <label class="label has-text-danger">LVEF if known</label>
			        <input class="is-checkradio" type="radio" v-model="lvef" id="lvef1" value="<35%" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLVEF">
			        <label for="lvef1"><35%</label>
			        <input class="is-checkradio" type="radio" v-model="lvef" id="lvef2" value="35-50%" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLVEF">
			        <label for="lvef2">35-50%</label>
			        <input class="is-checkradio" type="radio" v-model="lvef" id="lvef3" value=">50%" :disabled="disabled" :class="{'is-success': isSuccess, 'is-danger': !isSuccess}" @change="updateLVEF">
			        <label for="lvef3">>50%</label>
			</p>
		</div>
		<div class="field is-grouped">
			<form-check-yes label="Aortic Stenosis" name="as"></form-check-yes>
			<form-field-no-label type="text" placeholder="valve area or peak gradient if known" name="valve"></form-field-no-label>
		</div>
		<div class="field is-grouped">
			<form-check-yes label="Atrial Fibrillaton" name="af"></form-check-yes>
			<form-check-yes label="Cardiomyopathy" name="cardiomyopathy"></form-check-yes>
		</div>
		<div class="field">
			<form-field label="Other cardiac disease" textColor="has-text-danger" type="text" placeholder="please state...." name="othercvs"></form-field>
		</div>
	</div>
</template>


<script>

	import FormField from './FormField.vue';
	import FormYesNo from './FormYesNo.vue';
	import FormCheckYes from './FormCheckYes.vue';
	import FormFieldNoLabel from './FormFieldNoLabel';
	export default{

		data() {
			return {
				lvef: '',
				isSuccess: true,
				disabled: '',
			}
		},

		created() {
			this.lvef = patient.lvef;
			this.disabled = Event.disabled;
			Event.$on('enableForm', () => { this.disabled = Event.disabled });
		},

		methods: {
			updateLVEF()
			{
	        	this.isSuccess = false
	        	let newValue = this.lvef;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'lvef',
	                value: newValue,
	            }).then(() => {
	                this.isSuccess = true;
	                patient.lvef = newValue;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			}
		},
	

	}

</script>