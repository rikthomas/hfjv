<template>
	<article class="message">
		<div class="message-header">
			<p>Anaesthetic Details</p>
		</div>
		<div class="message-body">
			<div class="field is-grouped">
				<form-check-yes label="TIVA" name="tiva" :function="dummy"></form-check-yes>
				<form-check-yes label="Arterial Line" name="artline" :function="dummy"></form-check-yes>
				<form-check-yes label="HFJV used?" name="hfjvuse" :function="dummy"></form-check-yes>
			</div>
			<div id="hfjvuse" v-show="hfjvuse">
				<div class="field is-grouped">
					<form-field label="Frequency" type="number" placeholder="per min" name="frequency"></form-field>
					<form-field label="Driving pressure" type="number" placeholder="min bar" name="drivingpressuremin"></form-field>
					<form-field label="I'm a Ghost" textColor="has-text-white-ter" type="number" placeholder="max bar" name="drivingpressuremax"></form-field>
				</div>
				<div class="field is-grouped">
					<form-field label="FiO2" type="number" placeholder="% please" name="fio2"></form-field>
					<form-field label="Mean Pressure" type="number" placeholder="min cmH20" name="meanpressuremin"></form-field>
					<form-field label="I'm also a Ghost" textColor="has-text-white-ter" type="number" placeholder="max cmH20" name="meanpressuremax"></form-field>
				</div>
				<div class="field is-grouped">
					<form-field label="ETCO2 checks" type="number" placeholder="total number" name="etco2"></form-field>
					<form-field label="CO2 range" type="number" placeholder="min CO2" name="minco2"></form-field>
					<form-field label="Another Ghost" textColor="has-text-white-ter" type="number" placeholder="max co2" name="maxco2"></form-field>
				</div>
				<div class="field is-grouped">
					<form-field label="Desaturation <92%" type="number" placeholder="total number" name="desat"></form-field>
					<form-field label="Lowest saturations" type="number" placeholder="%" name="lowestdesat"></form-field>
				</div>
				<div class="field is-grouped">
					<form-check-yes label="Converted to IPPV?" name="ippv" :function="dummy"></form-check-yes>
					<form-check-yes label="Was IPPV better tolerated?" name="tolerance" :function="dummy" v-show="ippvuse"></form-check-yes>
				</div>
				<div class="field">
					<form-field label="Anaesthetist's overall satisfaction with HFJV for this case" type="number" placeholder="rating 0 - 100 please...." name="satisfaction"></form-field>
					<br>
				</div>
			</div>
				<div class="field is-grouped">
					<form-check-yes label="Extubated at the end?" name="extubated" :function="dummy"></form-check-yes>
					<form-select label="Post-op destination" name="destination" :data="destination" :function="dummy"></form-select>
				</div>
				<div class="field">
					<form-textarea label="Additional Comments" placeholder="any other comments, procedures or complications not captured elsewhere" name="comments"></form-textarea>
				</div>
		</div>
	</article>
</template>

<script>
	import FormField from './FormField.vue';
	import FormYesNo from './FormYesNo.vue';
	import FormSelect from './FormSelect.vue';
	import FormTextarea from './FormTextarea.vue';

	export default {

		data () {
			return {
				hfjvuse: '',
				ippvuse: '',
				destination: [	
				{"value": "ward", "text": "Ward"}, 
				{"value": "icu", "text": "ICU"},
				],
			}
		},

		created() {
			this.hfjvuse = patient.hfjvuse==1 ? true : false;
			this.ippvuse = patient.ippv==1 ? true : false;
			Event.$on('hfjvDrop', (value) => { this.hfjvuse = value });
			Event.$on('ippvDrop', (value) => { this.ippvuse = value });
		},

		methods: {
			dummy() {

			},
		},

	}


</script>