window.Event = new Vue({
	data: {
		disabled: '',
	},
	created() {
		this.disabled = patient['disabled']==0 ? false : true;
	}
});

Vue.component('form-field', require('./components/FormField.vue').default);

Vue.component('form-asa', require('./components/FormAsa.vue').default);

Vue.component('form-yes-no', require('./components/FormYesNo.vue').default);

Vue.component('form-cvs', require('./components/FormCvs.vue').default);

Vue.component('form-delete-cvs-modal', require('./components/FormDeleteCvsModal.vue').default);

Vue.component('form-delete-resp-modal', require('./components/FormDeleteRespModal.vue').default);

Vue.component('form-resp', require('./components/FormResp.vue').default);

Vue.component('form-check-yes', require('./components/FormCheckYes.vue').default);

Vue.component('form-field-no-label', require('./components/FormFieldNoLabel'));

Vue.component('form-charlson', require('./components/FormCharlson.vue').default);

Vue.component('form-ecog', require('./components/FormEcog.vue').default);

Vue.component('form-ppossum', require('./components/FormPpossum.vue').default);

Vue.component('form-select', require('./components/FormSelect.vue').default);

Vue.component('form-textarea', require('./components/FormTextarea.vue').default);

Vue.component('form-anaesthetic', require('./components/FormAnaesthetic.vue').default);

Vue.component('form-postop', require('./components/FormPostop.vue').default);

Vue.component('form-change-date-modal', require('./components/FormChangeDateModal.vue').default);

new Vue({
	el: '#app',

	data: {
		weight: '',
		height: '',
		cvsVisible: '',
		respVisible: '',
		modalVisible: false,
		respModalVisible: false,
		tumoursite: [{"value": "renal", "text": "Renal"}, {"value": "lung", "text": "Lung"}, {"value": "liver", "text": "Liver"}, {"value": "pancreas", "text": "Pancreas"},],
		procedure: [{"value": "cryoablation", "text": "Cryoablation"}, {"value": "microwave", "text": "Microwave"}, {"value": "gammaknife", "text": "Gamma Knife"},],
		position: [{"value": "Prone", "text": "Prone"}, {"value": "lateral", "text": "Lateral"},{"value": "supine", "text": "Supine"},],
		sex: [{"value": "male", "text": "Male"}, {"value": "female", "text": "Female"}],
		hfjvCase: '',
		disabled: '',
		date: patient.date,
	},

	created() {
		this.disabled = Event.disabled;
		Event.$on('enableForm', () => { this.disabled = Event.disabled });
		this.cvsVisible = patient.cvs==1 ? true : false;
		this.respVisible = patient.resp==1 ? true : false;
		this.hfjvCase = patient.proceed==1 ? true : false;
		Event.$on('weight', (weight) => { this.weight = weight });
		Event.$on('height', (height) => { this.height = height });
		Event.$on('proceedDrop', (value) => { this.hfjvCase = value });
		Event.$on('closeCvsModal', () => 
			{ 
				axios.put('/patient/update/' + patient.id, {
	                field: 'cvs',
	                value: true,
	            }).then(() => {
	            patient.cvs = 'yes';	
	            this.reload();
				})
				this.modalVisible = false;
	        });
		Event.$on('cvsDrop', function(value){
			if (value===true)
			{
				this.cvsVisible = true;
			} else if (value===false & (patient.ht!==null || patient.antiht!==null || patient.mi!==null || patient.stents!==null || patient.cva!==null || patient.lvef!==null || patient.as!==null || patient.valve!==null || patient.af!==null || patient.cardiomyopathy!==null || patient.othercvs!==null))
			{
				this.modalVisible = true;
			} else {
				this.cvsVisible = false;
			}
		}.bind(this));
		Event.$on('deleteCvsData', () => {
			axios.put('/patient/delcvs/' + patient.id);
			this.modalVisible = false;
			this.cvsVisible = false;
			this.reload();
		});
		Event.$on('closeRespModal', () => 
			{ 
				axios.put('/patient/update/' + patient.id, {
	                field: 'resp',
	                value: true,
	            }).then(() => {
	            patient.resp = 'yes';	
	            this.reload();
				})
				this.respModalVisible = false;
	        });
		Event.$on('respDrop', function(value){
			if (value===true)
			{
				this.respVisible = true;
			} else if (value===false & (patient.asthma!==null || patient.copd!==null || patient.bronchiectasis!==null || patient.steroids!==null || patient.icu!==null || patient.control!==null || patient.pft!==null || patient.fev1!==null || patient.fvc!==null || patient.fevfvc!==null || patient.pefr!==null || patient.otherresp!==null))
			{
				this.respModalVisible = true;
			} else {
				this.respVisible = false;
			}
		}.bind(this));
		Event.$on('deleteRespData', () => {
			axios.put('/patient/delresp/' + patient.id);
			this.respModalVisible = false;
			this.respVisible = false;
			this.reload();
		});
		Event.$on('updateDate', function(value){
			axios.put('/patient/update-date/' + patient.id, {
				date: value
			}).then(() => {
			location.reload();
			})
		})
	},
	computed: {
		bmi: function () {
			 return (this.weight/Math.pow((this.height/100), 2)).toFixed(0);
		}
	},
	watch: {
		bmi: function() {
			if(isFinite(this.bmi)){
			axios.put('/patient/update/' + patient.id, {
	                field: 'bmi',
	                value: this.bmi,
	            })
			}
		}
	},
	methods: {
		reload() {
			location.reload();
		},
		dummy() {

		},
		unlock() {
			Event.disabled = false;
			{Event.$emit('enableForm');}
		},
		changeDate() {
			Event.$emit('showDateModal')
		}
	}
});