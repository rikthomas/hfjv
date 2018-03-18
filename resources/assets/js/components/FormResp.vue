<template>
	<div>
		<div class="field is-grouped">
			<form-yes-no label="Asthma" name="asthma"></form-yes-no>
			<form-yes-no label="COPD" name="copd"></form-yes-no>
			<form-yes-no label="Bronchiectasis" name="bronchiectasis"></form-yes-no>
		</div>
		<div class="field is-grouped">
			<form-yes-no label="Steroids" name="steroids"></form-yes-no>
			<form-yes-no label="Previous ITU" name="icu"></form-yes-no>
		</div>
		<div class="field is-grouped">
			<form-yes-no label="Disease well controlled?" name="control"></form-yes-no>
			<form-yes-no label="Lung function tests?" name="pft"></form-yes-no>
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
	export default {

		data() {
			return {
				pftsVisible: false,
			}
		},

		created() {
			Event.$on('pftDrop', function(value) {
				if (value=='yes') {
					this.pftsVisible = true;
				} else {
					this.pftsVisible = false;
				}
			}.bind(this));
		},


	}

</script>