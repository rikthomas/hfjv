<template>
	<article class="message is-warning">
		<div class="message-header">
			<p>P-POSSUM Score</p>
		</div>
		<div class="message-body">
			<div class="field">
				<form-select label="Cardiac/CXR" name="ppcardiac" :data="cardiac" :function="calcPpossum"></form-select>
			</div>
			<div class="field">
				<form-select label="Respiratory/CXR" name="ppresp" :data="respiratory" :function="calcPpossum"></form-select>
			</div>
			<div class="field">
				<form-select label="ECG" name="ppecg" :data="ecg" :function="calcPpossum"></form-select>
			</div>
			<div class="field is-grouped">
				<p class="control is-expanded">
					<form-select label="Systolic BP" name="ppbp" :data="systolic" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="Pulse" name="pppulse" :data="pulse" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="Haemoglobin g/dl" name="pphb" :data="hb" :function="calcPpossum"></form-select>
				</p>
			</div>
			<div class="field is-grouped">
				<p class="control is-expanded">
					<form-select label="WBC" name="ppwbc" :data="wbc" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="Urea mmol/L" name="ppurea" :data="urea" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="Sodium mmol/L" name="ppna" :data="na" :function="calcPpossum"></form-select>
				</p>
			</div>
			<div class="field is-grouped">
				<p class="control is-expanded">
					<form-select label="K+ mmol/L" name="ppk" :data="potassium" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="GCS" name="ppgcs" :data="gcs" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="Operative Severity" name="ppseverity" :data="severity" :function="calcPpossum"></form-select>
				</p>
			</div>
			<div class="field">
				<p class="control is-expanded">
					<form-select label="Pertioneal soiling" name="ppsoiling" :data="soiling" :function="calcPpossum"></form-select>
				</p>
			</div>
			<div class="field is-grouped">
				<p class="control is-expanded">
					<form-select label="No. of procedures" name="ppprocedures" :data="procedures" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="Blood loss ml" name="ppbloodloss" :data="blood" :function="calcPpossum"></form-select>
				</p>
			</div>
			<div class="field is-grouped">
				<p class="control is-expanded">
					<form-select label="Malignancy status" name="ppmalignancy" :data="malignancy" :function="calcPpossum"></form-select>
				</p>
				<p class="control is-expanded">
					<form-select label="Urgency" name="ppurgency" :data="urgency" :function="calcPpossum"></form-select>
				</p>
			</div>
			<div class="field is-grouped">
				<p class="control is-expanded">
		          <label class="label">Physiology Score</label>
		          <input type="number" class="input" name="ppphysiology" v-model="ppphysiology" disabled>
		        </p>
		        <p class="control is-expanded">
		          <label class="label">Operative Score</label>
		          <input type="number" class="input" name="ppopscore" v-model="ppopscore" disabled>
		        </p>
		        <p class="control is-expanded">
		          <label class="label">Morbidity %</label>
		          <input type="number" class="input" name="ppmorbidity" v-model="ppmorbidity" disabled>
		        </p>
		        <p class="control is-expanded">
		          <label class="label">Mortality %</label>
		          <input type="number" class="input" name="ppmortality" v-model="ppmortality" disabled>
		        </p>	
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
				{"value": 2, "text": "dyspnoea on exertion, mild COPD"},
				{"value": 4, "text": "limiting dyspnoea (one flight), moderate COPD"},
				{"value": 8, "text": "dyspnoea at rest (rate >30/min), fibrosis or consolidation"}
				],
				ecg: [	
				{"value": 1, "text": "normal"}, 
				{"value": 2, "text": "AF, rate 60-90"},
				{"value": 8, "text": "any other abnormal rhythm, >4/min ectopics, Q waves, ST/T changes"}
				],
				systolic: [	
				{"value": 8, "text": "<90"}, 
				{"value": 4, "text": "90-99"},
				{"value": 2, "text": "100-109"},
				{"value": 1, "text": "110-130"},
				{"value": 2, "text": "131-170"},
				{"value": 4, "text": ">170"},
				],
				pulse: [	
				{"value": 8, "text": "<40"}, 
				{"value": 2, "text": "40-49"},
				{"value": 1, "text": "50-80"},
				{"value": 2, "text": "81-100"},
				{"value": 4, "text": "101-120"},
				{"value": 8, "text": ">120"},
				],
				hb: [	
				{"value": 8, "text": "<10"}, 
				{"value": 4, "text": "10-11.4"},
				{"value": 2, "text": "11.5-12.9"},
				{"value": 1, "text": "13.0-16.0"},
				{"value": 2, "text": "16.1-17"},
				{"value": 4, "text": "17.1-18"},
				{"value": 8, "text": "18"},
				],
				wbc: [	
				{"value": 4, "text": "<3"}, 
				{"value": 2, "text": "3.1-4"},
				{"value": 1, "text": "4-10"},
				{"value": 2, "text": "10.1-20"},
				{"value": 4, "text": ">20"},
				],
				urea: [	
				{"value": 1, "text": "<7.6"},
				{"value": 2, "text": "7.6-10"},
				{"value": 4, "text": "10.1-15"},
				{"value": 8, "text": ">15"},
				],
				na: [	
				{"value": 1, "text": ">135"},
				{"value": 2, "text": "131-135"},
				{"value": 4, "text": "126-130"},
				{"value": 8, "text": "<126"},
				],
				potassium: [	
				{"value": 8, "text": "<2.9"}, 
				{"value": 4, "text": "2.9-3.1"},
				{"value": 2, "text": "3.2-3.4"},
				{"value": 1, "text": "3.5-5"},
				{"value": 2, "text": "5.1-5.3"},
				{"value": 4, "text": "5.4-5.9"},
				{"value": 8, "text": ">5.9"},
				],
				gcs: [	
				{"value": 1, "text": "15"},
				{"value": 2, "text": "12-14"},
				{"value": 4, "text": "9-11"},
				{"value": 8, "text": "<9"},
				],
				severity: [	
				{"value": 1, "text": "minor"},
				{"value": 2, "text": "moderate"},
				{"value": 4, "text": "major"},
				{"value": 8, "text": "major+"},
				],
				procedures: [	
				{"value": 1, "text": "1"},
				{"value": 4, "text": "2"},
				{"value": 8, "text": ">2"},
				],
				blood: [	
				{"value": 1, "text": "<100"},
				{"value": 2, "text": "101-500"},
				{"value": 4, "text": "501-999"},
				{"value": 8, "text": ">1000"},
				],
				soiling: [	
				{"value": 1, "text": "none"},
				{"value": 2, "text": "minor"},
				{"value": 4, "text": "local pus"},
				{"value": 8, "text": "free bowel content, pus or blood"},
				],
				malignancy: [	
				{"value": 1, "text": "none"},
				{"value": 2, "text": "primary only"},
				{"value": 4, "text": "nodal mets"},
				{"value": 8, "text": "distant mets"},
				],
				urgency: [	
				{"value": 1, "text": "elective"},
				{"value": 4, "text": "2-24 hours"},
				{"value": 8, "text": "less than 2 hours"},
				],
				ppphysiology: '',
				ppopscore: '',
				ppmorbidity: '',
				ppmortality: '',
			}
		},
		created(){
			this.calcPpossum();
		},
		methods: {
			round(value) {
				return Number(Math.round(value+'e'+1)+'e-'+1);
			},
			calcPpossum()
			{
				if (patient.age) {
						if (patient.age < 61) {
					 	var age = 1;
					 } else if (patient.age >= 61 && patient.age < 70) {
					 	var age = 2;
					 } else {
					 	var age = 4;
					 }
				}
				for (var i = 0; i < this.cardiac.length; i++)
				{
					if (patient.ppcardiac == this.cardiac[i].text)
					{
						var ppcardiac = this.cardiac[i].value;
					}
				}
				for (var i = 0; i < this.respiratory.length; i++)
				{
					if (patient.ppresp == this.respiratory[i].text)
					{
						var ppresp = this.respiratory[i].value;
					}
				}
				for (var i = 0; i < this.ecg.length; i++)
				{
					if (patient.ppecg == this.ecg[i].text)
					{
						var ppecg = this.ecg[i].value;
					}
				}
				for (var i = 0; i < this.systolic.length; i++)
				{
					if (patient.ppbp == this.systolic[i].text)
					{
						var ppbp = this.systolic[i].value;
					}
				}
				for (var i = 0; i < this.pulse.length; i++)
				{
					if (patient.pppulse == this.pulse[i].text)
					{
						var pppulse = this.pulse[i].value;
					}
				}
				for (var i = 0; i < this.hb.length; i++)
				{
					if (patient.pphb == this.hb[i].text)
					{
						var pphb = this.hb[i].value;
					}
				}
				for (var i = 0; i < this.wbc.length; i++)
				{
					if (patient.ppwbc == this.wbc[i].text)
					{
						var ppwbc = this.wbc[i].value;
					}
				}
				for (var i = 0; i < this.urea.length; i++)
				{
					if (patient.ppurea == this.urea[i].text)
					{
						var ppurea = this.urea[i].value;
					}
				}
				for (var i = 0; i < this.na.length; i++)
				{
					if (patient.ppna == this.na[i].text)
					{
						var ppna = this.na[i].value;
					}
				}
				for (var i = 0; i < this.potassium.length; i++)
				{
					if (patient.ppk == this.potassium[i].text)
					{
						var ppk = this.potassium[i].value;
					}
				}
				for (var i = 0; i < this.gcs.length; i++)
				{
					if (patient.ppgcs == this.gcs[i].text)
					{
						var ppgcs = this.gcs[i].value;
					}
				}
				for (var i = 0; i < this.severity.length; i++)
				{
					if (patient.ppseverity == this.severity[i].text)
					{
						var ppseverity = this.severity[i].value;
					}
				}
				for (var i = 0; i < this.procedures.length; i++)
				{
					if (patient.ppprocedures == this.procedures[i].text)
					{
						var ppprocedures = this.procedures[i].value;
					}
				}
				for (var i = 0; i < this.blood.length; i++)
				{
					if (patient.ppbloodloss == this.blood[i].text)
					{
						var ppbloodloss = this.blood[i].value;
					}
				}
				for (var i = 0; i < this.soiling.length; i++)
				{
					if (patient.ppsoiling == this.soiling[i].text)
					{
						var ppsoiling = this.soiling[i].value;
					}
				}
				for (var i = 0; i < this.malignancy.length; i++)
				{
					if (patient.ppmalignancy == this.malignancy[i].text)
					{
						var ppmalignancy = this.malignancy[i].value;
					}
				}
				for (var i = 0; i < this.urgency.length; i++)
				{
					if (patient.ppurgency == this.urgency[i].text)
					{
						var ppurgency = this.urgency[i].value;
					}
				}
				 this.ppphysiology = 
				 age +
				 ppcardiac +
				 ppresp +
				 ppecg +
				 ppbp +
				 pppulse +
				 pphb + 
				 ppwbc +
				 ppurea + 
				 ppna +
				 ppk +
				 ppgcs;
				 this.ppopscore = 
				 ppseverity +
				 ppprocedures +
				 ppbloodloss + 
				 ppsoiling +
				 ppmalignancy +
				 ppurgency;
				 var morbexp = (0.16 * this.ppphysiology) + (0.19 * this.ppopscore) - 5.91;
				 this.ppmorbidity = this.round(100*(1/(1 + Math.exp(-morbexp))));
				 var mortexp = -9.065 + (0.1692 * this.ppphysiology) + (0.1550 * this.ppopscore);
				 this.ppmortality = this.round(100*(1/(1 + Math.exp(-mortexp))));
			}
		},
		watch: {
			ppphysiology: function () {
				if(isFinite(this.ppphysiology)){
			axios.put('/patient/update/' + patient.id, {
	                field: 'ppphysiology',
	                value: this.ppphysiology,
	            })
			}
		},
			ppopscore: function () {
				if(isFinite(this.ppopscore)){
			axios.put('/patient/update/' + patient.id, {
	                field: 'ppopscore',
	                value: this.ppopscore,
	            })
			}
		},
			ppmorbidity: function () {
				if(isFinite(this.ppmorbidity)){
			axios.put('/patient/update/' + patient.id, {
	                field: 'ppmorbidity',
	                value: this.ppmorbidity,
	            })
			}
		},
			ppmortality: function () {
				if(isFinite(this.ppmortality)){
			axios.put('/patient/update/' + patient.id, {
	                field: 'ppmortality',
	                value: this.ppmortality,
	            })
			}
		},
		},

	}
</script>

