window.Event = new Vue();

Vue.component('form-field', require('./components/FormField.vue'));

Vue.component('form-asa', require('./components/FormAsa.vue'));

Vue.component('form-yes-no', require('./components/FormYesNo.vue'));

Vue.component('form-cvs', require('./components/FormCvs.vue'));

Vue.component('form-delete-cvs-modal', require('./components/FormDeleteCvsModal.vue'));

Vue.component('form-delete-resp-modal', require('./components/FormDeleteRespModal.vue'));

Vue.component('form-resp', require('./components/FormResp.vue'));

Vue.component('form-check-yes', require('./components/FormCheckYes.vue'));

Vue.component('form-field-no-label', require('./components/FormFieldNoLabel'));

Vue.component('form-charlson', require('./components/FormCharlson.vue'));

new Vue({
	el: '#app',

	data: {
		weight: '',
		height: '',
		cvsVisible: '',
		respVisible: '',
		modalVisible: false,
		respModalVisible: false,
	},

	created() {
		this.cvsVisible = patient.cvs==1 ? true : false;
		this.respVisible = patient.resp==1 ? true : false;
		Event.$on('weight', (weight) => { this.weight = weight });
		Event.$on('height', (height) => { this.height = height });
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
		Event.$on('miCheck', (value) => { this.cvsVisible = value==1 ? true : false});
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
		}
	}
});