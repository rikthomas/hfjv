<template>
	<div>
		<div class="field is-grouped">
			<form-check-yes label="Asthma" name="asthma"></form-check-yes>
			<form-check-yes label="COPD" name="copd"></form-check-yes>
			<form-check-yes label="Bronchiectasis" name="bronchiectasis"></form-check-yes>
		</div>
		<div class="field is-grouped">
			<form-check-yes label="Steroids" name="steroids"></form-check-yes>
			<form-check-yes label="Previous ITU" name="icu"></form-check-yes>
		</div>
		<div class="field is-grouped">
			<form-check-yes label="Disease well controlled?" name="control"></form-check-yes>
			<form-check-yes label="Lung function tests?" name="pft"></form-check-yes>
		</div>
		<div class="field is-grouped" v-if="pftsVisible">
			<form-field label="FEV1" type="number" placeholder="Litres" name="fev1"></form-field>
			<form-field label="FVC" type="number" placeholder="Litres" name="fvc"></form-field>
		</div>
		<div class="field is-grouped" v-if="pftsVisible">
			<form-field label="FEV1/FVC" type="number" placeholder="%" name="fevfvc"></form-field>
			<form-field label="PEFR" type="number" placeholder="L/min" name="pefr"></form-field>
		</div>
		<div claa="field">
			<form-field label="Other respiratory disease" type="text" placeholder="" name="otherresp"></form-field>
		</div>
	</div>
</template>

<script>
	import FormField from './FormField.vue';
	import FormYesNo from './FormYesNo.vue';
	import FormCheckYes from './FormCheckYes.vue';
	export default {

		data() {
			return {
				pftsVisible: '',
			}
		},

		created() {
			this.pftsVisible = patient.pft==1 ? true : false;
			Event.$on('pftDrop', function(value) {
				if (value===true) {
					this.pftsVisible = true;
				} else {
					this.pftsVisible = false;
				}
			}.bind(this));
		},


	}

</script>