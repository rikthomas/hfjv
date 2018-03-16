/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ({

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

window.Event = new Vue();

Vue.component('form-field', {

	props: ['label', 'type', 'placeholder', 'name'],

	template: '\n\t\t<p class="control is-expanded">\n          <label class="label">{{ label }}</label>\n          <input :type="type" class="input" :class="{\'is-success\': isSaved, \'is-danger\': isDirty}"  :placeholder="placeholder" :name="name" v-model="value" @blur="updateField" @keyup="dirtyCheck">\n        </p>\n\t',

	data: function data() {
		return {
			value: '',
			isDirty: false,
			isSaved: false
		};
	},
	created: function created() {
		this.value = patient[this.name];
		if (this.name == 'weight') {
			Event.$emit('weight', this.value);
		}
		if (this.name == 'height') {
			Event.$emit('height', this.value);
		}
	},


	methods: {
		updateField: function updateField() {
			var _this = this;

			if (this.value != patient[this.name]) {
				var field = this.name;
				var newValue = this.value;
				axios.put('/patient/update/' + patient.id, {
					field: field,
					value: newValue
				}).then(function () {
					_this.isDirty = false;
					_this.isSaved = true;
					patient[_this.name] = newValue;
					if (_this.name == 'weight') {
						Event.$emit('weight', _this.value);
					}
					if (_this.name == 'height') {
						Event.$emit('height', _this.value);
					}
				}).catch(function (error) {
					console.log(error);
				});
			}
		},
		dirtyCheck: function dirtyCheck() {
			this.isDirty = this.value != patient[this.name] ? true : false;
		}
	}
});

Vue.component('form-preassess', {

	template: '\n\t\t<p class="control">\n\t\t    <label class="label">ASA</label>\n\t\t      <label class="radio">\n\t\t        <input type="radio" name="asa">\n\t\t        1\n\t\t      </label>\n\t\t      <label class="radio">\n\t\t        <input type="radio" name="asa">\n\t\t        2\n\t\t      </label>\n\t\t      <label class="radio">\n\t\t        <input type="radio" name="asa">\n\t\t        3\n\t\t      </label>\n\t\t      <label class="radio">\n\t\t        <input type="radio" name="asa">\n\t\t        4\n\t\t      </label>\n\t\t      <label class="radio">\n\t\t        <input type="radio" name="asa">\n\t\t        5\n\t\t      </label>\n\t\t</p>\n\t'

});

new Vue({
	el: '#app',

	data: {
		weight: '',
		height: ''
	},

	created: function created() {
		var _this2 = this;

		Event.$on('weight', function (weight) {
			_this2.weight = weight;
		});
		Event.$on('height', function (height) {
			_this2.height = height;
		});
	},

	computed: {
		bmi: function bmi() {
			return (this.weight / Math.pow(this.height / 100, 2)).toFixed(1);
		}
	},
	watch: {
		bmi: function bmi() {
			axios.put('/patient/update/' + patient.id, {
				field: 'bmi',
				value: this.bmi
			});
		}
	}
});

/***/ })

/******/ });