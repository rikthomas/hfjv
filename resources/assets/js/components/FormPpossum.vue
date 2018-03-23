<template>
	<article class="message is-warning">
		<div class="message-header">
			<p>P-POSSUM Score</p>
		</div>
		<div class="message-body">
			<div class="field">
				<form-select label="Cardiac/CXR" name="ppcardiac" :data="cardiac"></form-select>
			</div>
			<div class="field">
				<form-select label="Respiratory/CXR" name="ppresp" :data="respiratory"></form-select>
			</div>
		</div>	
	</article>
</template>

<script>
	import FormSelect from './FormSelect.vue';
	export default {

		data() {
			return {
				cardiac: [	
				{"value": 1, "text": "no failure, normal CXR"}, 
				{"value": 2, "text": "cardiac meds, no cardiomegaly"},
				{"value": 4, "text": "peripheral oedema, warfarin, borderline cardiomegaly"},
				{"value": 8, "text": "raised JVP, cardiomegaly"}
				],
				respiratory: [	
				{"value": 1, "text": "no dyspnoea"}, 
				{"value": 2, "text": "dyspnoea on exertion, mild COPD "},
				{"value": 4, "text": "limiting dyspnoea (one flight), moderate COPD"},
				{"value": 8, "text": "dyspnoea at rest (rate >30/min), fibrosis or consolidation"}
				],
			}
		}

	}
</script>

