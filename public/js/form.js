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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(47)
/* template */
var __vue_template__ = __webpack_require__(48)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FormField.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8974f922", Component.options)
  } else {
    hotAPI.reload("data-v-8974f922", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(52)
/* template */
var __vue_template__ = __webpack_require__(53)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FormYesNo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62542b06", Component.options)
  } else {
    hotAPI.reload("data-v-62542b06", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(46);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

window.Event = new Vue();

Vue.component('form-field', __webpack_require__(10));

Vue.component('form-asa', __webpack_require__(49));

Vue.component('form-yes-no', __webpack_require__(11));

Vue.component('form-cvs', __webpack_require__(54));

Vue.component('form-delete-modal', __webpack_require__(61));

new Vue({
	el: '#app',

	data: {
		weight: '',
		height: '',
		cvsVisible: '',
		modalVisible: false
	},

	created: function created() {
		var _this = this;

		this.cvsVisible = patient.cvs == 'yes' ? true : false;
		Event.$on('weight', function (weight) {
			_this.weight = weight;
		});
		Event.$on('height', function (height) {
			_this.height = height;
		});
		Event.$on('closeCvsModal', function () {
			axios.put('/patient/update/' + patient.id, {
				field: 'cvs',
				value: 'yes'
			}).then(function () {
				patient.cvs = 'yes';
				_this.reload();
			});
			_this.modalVisible = false;
		});
		//Event.$on('cvsDrop', (value) => { this.cvsVisible = value=='yes' ? true : false});
		Event.$on('cvsDrop', function (value) {
			if (value == 'yes') {
				this.cvsVisible = true;
			} else if (value == 'no' & (patient.ht != null || patient.antiht != null || patient.mi != null || patient.stents != null || patient.cva != null || patient.lvef != null || patient.as != null || patient.valve != null || patient.af != null || patient.cardiomyopathy != null || patient.othercvs != null)) {
				this.modalVisible = true;
			} else {
				this.cvsVisible = false;
			}
		}.bind(this));
		Event.$on('deleteCvsData', function () {
			axios.put('/patient/delcvs/' + patient.id);
			_this.modalVisible = false;
			_this.cvsVisible = false;
			_this.reload();
		});
	},

	computed: {
		bmi: function bmi() {
			return (this.weight / Math.pow(this.height / 100, 2)).toFixed(0);
		}
	},
	watch: {
		bmi: function bmi() {
			if (isFinite(this.bmi)) {
				axios.put('/patient/update/' + patient.id, {
					field: 'bmi',
					value: this.bmi
				});
			}
		}
	},
	methods: {
		reload: function reload() {
			location.reload();
		}
	}
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

	props: ['label', 'type', 'placeholder', 'name'],

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

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", { staticClass: "control is-expanded" }, [
    _c("label", { staticClass: "label" }, [_vm._v(_vm._s(_vm.label))]),
    _vm._v(" "),
    _vm.type === "checkbox"
      ? _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.value,
              expression: "value"
            }
          ],
          staticClass: "input",
          class: { "is-success": _vm.isSaved, "is-danger": _vm.isDirty },
          attrs: {
            placeholder: _vm.placeholder,
            name: _vm.name,
            type: "checkbox"
          },
          domProps: {
            checked: Array.isArray(_vm.value)
              ? _vm._i(_vm.value, null) > -1
              : _vm.value
          },
          on: {
            blur: _vm.updateField,
            keyup: _vm.dirtyCheck,
            change: function($event) {
              var $$a = _vm.value,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.value = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.value = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.value = $$c
              }
            }
          }
        })
      : _vm.type === "radio"
        ? _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            staticClass: "input",
            class: { "is-success": _vm.isSaved, "is-danger": _vm.isDirty },
            attrs: {
              placeholder: _vm.placeholder,
              name: _vm.name,
              type: "radio"
            },
            domProps: { checked: _vm._q(_vm.value, null) },
            on: {
              blur: _vm.updateField,
              keyup: _vm.dirtyCheck,
              change: function($event) {
                _vm.value = null
              }
            }
          })
        : _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.value,
                expression: "value"
              }
            ],
            staticClass: "input",
            class: { "is-success": _vm.isSaved, "is-danger": _vm.isDirty },
            attrs: {
              placeholder: _vm.placeholder,
              name: _vm.name,
              type: _vm.type
            },
            domProps: { value: _vm.value },
            on: {
              blur: _vm.updateField,
              keyup: _vm.dirtyCheck,
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.value = $event.target.value
              }
            }
          })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8974f922", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(50)
/* template */
var __vue_template__ = __webpack_require__(51)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FormAsa.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c6fa4b8", Component.options)
  } else {
    hotAPI.reload("data-v-0c6fa4b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			asa: '',
			isTicked: false
		};
	},
	created: function created() {
		this.asa = patient.asa;
	},


	methods: {
		updateAsa: function updateAsa() {
			var _this = this;

			var newValue = this.asa;
			axios.put('/patient/update/' + patient.id, {
				field: 'asa',
				value: newValue
			}).then(function () {
				_this.isTicked = true;
			}).catch(function (error) {
				console.log(error);
			});
		}
	}

});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", { staticClass: "control is-expanded" }, [
    _c("label", { staticClass: "label" }, [_vm._v("ASA")]),
    _vm._v(" "),
    _c("label", { staticClass: "radio" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.asa,
            expression: "asa"
          }
        ],
        attrs: { type: "radio", value: "1" },
        domProps: { checked: _vm._q(_vm.asa, "1") },
        on: {
          change: [
            function($event) {
              _vm.asa = "1"
            },
            _vm.updateAsa
          ]
        }
      }),
      _vm._v("\n\t        1\n\t      ")
    ]),
    _vm._v(" "),
    _c("label", { staticClass: "radio" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.asa,
            expression: "asa"
          }
        ],
        attrs: { type: "radio", value: "2" },
        domProps: { checked: _vm._q(_vm.asa, "2") },
        on: {
          change: [
            function($event) {
              _vm.asa = "2"
            },
            _vm.updateAsa
          ]
        }
      }),
      _vm._v("\n\t        2\n\t      ")
    ]),
    _vm._v(" "),
    _c("label", { staticClass: "radio" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.asa,
            expression: "asa"
          }
        ],
        attrs: { type: "radio", value: "3" },
        domProps: { checked: _vm._q(_vm.asa, "3") },
        on: {
          change: [
            function($event) {
              _vm.asa = "3"
            },
            _vm.updateAsa
          ]
        }
      }),
      _vm._v("\n\t        3\n\t      ")
    ]),
    _vm._v(" "),
    _c("label", { staticClass: "radio" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.asa,
            expression: "asa"
          }
        ],
        attrs: { type: "radio", value: "4" },
        domProps: { checked: _vm._q(_vm.asa, "4") },
        on: {
          change: [
            function($event) {
              _vm.asa = "4"
            },
            _vm.updateAsa
          ]
        }
      }),
      _vm._v("\n\t        4\n\t      ")
    ]),
    _vm._v(" "),
    _c("label", { staticClass: "radio" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.asa,
            expression: "asa"
          }
        ],
        attrs: { type: "radio", value: "5" },
        domProps: { checked: _vm._q(_vm.asa, "5") },
        on: {
          change: [
            function($event) {
              _vm.asa = "5"
            },
            _vm.updateAsa
          ]
        }
      }),
      _vm._v("\n\t        5\n\t      ")
    ]),
    _vm._v(" \n\t      "),
    _vm.isTicked
      ? _c("i", {
          staticClass: "fas fa-check",
          staticStyle: { color: "green" }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c6fa4b8", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

	props: ['label', 'name', 'checked'],

	data: function data() {
		return {
			value: '',
			isTicked: false
		};
	},
	created: function created() {
		this.value = patient[this.name];
	},


	methods: {
		updateYN: function updateYN() {
			var _this = this;

			var field = this.name;
			var newValue = this.value;
			axios.put('/patient/update/' + patient.id, {
				field: field,
				value: newValue
			}).then(function () {
				patient[_this.name] = newValue;
				_this.isTicked = true;
				if (_this.name == 'cvs') {
					Event.$emit('cvsDrop', _this.value);
				}
			}).catch(function (error) {
				console.log(error);
			});
		}
	}

});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("p", { staticClass: "control is-expanded" }, [
    _c("label", { staticClass: "label" }, [_vm._v(_vm._s(_vm.label))]),
    _vm._v(" "),
    _c("label", { staticClass: "radio" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value,
            expression: "value"
          }
        ],
        attrs: { type: "radio", name: _vm.name, value: "yes" },
        domProps: { checked: _vm._q(_vm.value, "yes") },
        on: {
          change: [
            function($event) {
              _vm.value = "yes"
            },
            _vm.updateYN
          ]
        }
      }),
      _vm._v("\n        Yes\n      ")
    ]),
    _vm._v(" "),
    _c("label", { staticClass: "radio" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.value,
            expression: "value"
          }
        ],
        attrs: { type: "radio", name: _vm.name, value: "no" },
        domProps: { checked: _vm._q(_vm.value, "no") },
        on: {
          change: [
            function($event) {
              _vm.value = "no"
            },
            _vm.updateYN
          ]
        }
      }),
      _vm._v("\n        No\n    ")
    ]),
    _vm._v(" \n    "),
    _vm.isTicked
      ? _c("i", {
          staticClass: "fas fa-check",
          staticStyle: { color: "green" }
        })
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-62542b06", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(55)
/* template */
var __vue_template__ = __webpack_require__(56)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FormCvs.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-69b0d515", Component.options)
  } else {
    hotAPI.reload("data-v-69b0d515", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormField_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormField_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__FormField_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormYesNo_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FormYesNo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__FormYesNo_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
	data: function data() {
		return {
			lvef: '',
			isTicked: false
		};
	},
	created: function created() {
		this.lvef = patient.lvef;
	},


	methods: {
		updateLVEF: function updateLVEF() {
			var _this = this;

			var newValue = this.lvef;
			axios.put('/patient/update/' + patient.id, {
				field: 'lvef',
				value: newValue
			}).then(function () {
				_this.isTicked = true;
			}).catch(function (error) {
				console.log(error);
			});
		}
	}

});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "field is-grouped" },
      [
        _c("form-yes-no", { attrs: { label: "Hypertension", name: "ht" } }),
        _vm._v(" "),
        _c("form-field", {
          attrs: {
            label: "If so, then how many?",
            type: "number",
            placeholder: "number of antihypertensives",
            name: "antiht"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "field is-grouped" },
      [
        _c("form-yes-no", { attrs: { label: "Previous MI?", name: "mi" } }),
        _vm._v(" "),
        _c("form-yes-no", { attrs: { label: "Any stents?", name: "stents" } }),
        _vm._v(" "),
        _c("form-yes-no", { attrs: { label: "CVA?", name: "cva" } })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "field" }, [
      _c("p", { staticClass: "control is-expanded" }, [
        _c("label", { staticClass: "label" }, [_vm._v("LVEF if known")]),
        _vm._v(" "),
        _c("label", { staticClass: "radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.lvef,
                expression: "lvef"
              }
            ],
            attrs: { type: "radio", value: "<35%" },
            domProps: { checked: _vm._q(_vm.lvef, "<35%") },
            on: {
              change: [
                function($event) {
                  _vm.lvef = "<35%"
                },
                _vm.updateLVEF
              ]
            }
          }),
          _vm._v("\n\t\t        <35%\n\t\t      ")
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.lvef,
                expression: "lvef"
              }
            ],
            attrs: { type: "radio", value: "35-50%" },
            domProps: { checked: _vm._q(_vm.lvef, "35-50%") },
            on: {
              change: [
                function($event) {
                  _vm.lvef = "35-50%"
                },
                _vm.updateLVEF
              ]
            }
          }),
          _vm._v("\n\t\t        35-50%\n\t\t      ")
        ]),
        _vm._v(" "),
        _c("label", { staticClass: "radio" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.lvef,
                expression: "lvef"
              }
            ],
            attrs: { type: "radio", value: ">50%" },
            domProps: { checked: _vm._q(_vm.lvef, ">50%") },
            on: {
              change: [
                function($event) {
                  _vm.lvef = ">50%"
                },
                _vm.updateLVEF
              ]
            }
          }),
          _vm._v("\n\t\t        >50%\n\t\t      ")
        ]),
        _vm._v(" \n\t\t      "),
        _vm.isTicked
          ? _c("i", {
              staticClass: "fas fa-check",
              staticStyle: { color: "green" }
            })
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "field is-grouped" },
      [
        _c("form-yes-no", { attrs: { label: "Aortic Stenosis", name: "as" } }),
        _vm._v(" "),
        _c("form-field", {
          attrs: {
            label: "Valve area",
            type: "text",
            placeholder: "or peak gradient if known",
            name: "valve"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "field is-grouped" },
      [
        _c("form-yes-no", {
          attrs: { label: "Atrial Fibrillaton", name: "af" }
        }),
        _vm._v(" "),
        _c("form-yes-no", {
          attrs: { label: "Cardiomyopathy", name: "cardiomyopathy" }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "field" },
      [
        _c("form-field", {
          attrs: {
            label: "Other cardiac disease",
            type: "text",
            placeholder: "please state....",
            name: "othercvs"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-69b0d515", module.exports)
  }
}

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(62)
/* template */
var __vue_template__ = __webpack_require__(63)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/FormDeleteModal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ab4bc77", Component.options)
  } else {
    hotAPI.reload("data-v-5ab4bc77", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({

	methods: {
		close: function close() {
			Event.$emit('closeCvsModal');
		},
		ok: function ok() {
			Event.$emit('deleteCvsData');
		}
	}

});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal is-active" }, [
    _c("div", { staticClass: "modal-background" }),
    _vm._v(" "),
    _c("div", { staticClass: "modal-card" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "modal-card-body" }, [
        _vm._v(
          "\n      If you click OK you will erase all of the data from the CVS section? Are you sure you want to do that?\n    "
        )
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "modal-card-foot" }, [
        _c(
          "button",
          { staticClass: "button is-success", on: { click: _vm.ok } },
          [_vm._v("OK then!")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "button is-danger", on: { click: _vm.close } },
          [_vm._v("Belay that order!")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "modal-card-head" }, [
      _c("p", { staticClass: "modal-card-title" }, [
        _vm._v("Whoa there Nelly!")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ab4bc77", module.exports)
  }
}

/***/ })
/******/ ]);