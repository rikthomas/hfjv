<template>
	<div>
		<div class="field is-grouped">
			<form-yes-no label="Hypertension" name="ht"></form-yes-no>
			<form-field label="If so, then how many?" type="number" placeholder="number of antihypertensives" name="anti-ht"></form-field>
		</div>
		<div class="field is-grouped">
			<form-yes-no label="Previous MI?" name="mi"></form-yes-no>
			<form-yes-no label="Any stents?" name="stents"></form-yes-no>
			<form-yes-no label="CVA?" name="cva"></form-yes-no>
		</div>
		<div class="field">
			<p class="control is-expanded">
			    <label class="label">LVEF if known</label>
			      <label class="radio">
			        <input type="radio" v-model="lvef" value="<35%" @change="updateLVEF">
			        <35%
			      </label>
			      <label class="radio">
			        <input type="radio" v-model="lvef" value="35-50%" @change="updateLVEF">
			        35-50%
			      </label>
			      <label class="radio">
			        <input type="radio" v-model="lvef" value=">50%" @change="updateLVEF">
			        >50%
			      </label>&nbsp
			      <i class="fas fa-check" style="color:green" v-if="isTicked"></i>	      
			</p>
		</div>
		<div class="field is-grouped">
			<form-yes-no label="Aortic Stenosis" name="as"></form-yes-no>
			<form-field label="Valve area" type="text" placeholder="or peak gradient if known" name="valve"></form-field>
		</div>
		<div class="field is-grouped">
			<form-yes-no label="Atrial Fibrillaton" name="af"></form-yes-no>
			<form-yes-no label="Cardiomyopathy" name="cardiomyopathy"></form-yes-no>
		</div>
		<div class="field">
			<form-field label="Other cardiac disease" type="text" placeholder="please state...." name="othercvs"></form-field>
		</div>
	</div>
</template>


<script>

	import FormField from './FormField.vue';
	import FormYesNo from './FormYesNo.vue';
	export default{

		data() {
			return {
				lvef: '',
				isTicked: false
			}
		},

		created() {
			this.lvef = patient.lvef;
		},

		methods: {
			updateLVEF()
			{
	        	let newValue = this.lvef;
	            axios.put('/patient/update/' + patient.id, {
	                field: 'lvef',
	                value: newValue,
	            }).then(() => {
	                this.isTicked = true;
	              })
	              .catch(function (error) {
	                console.log(error);
	              });         
			}
		},
	

	}

</script>