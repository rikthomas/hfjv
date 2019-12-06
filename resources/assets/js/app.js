
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import 'babel-polyfill';
import 'whatwg-fetch';
require('es6-promise').polyfill();
require('es6-object-assign').polyfill();
 require('./bulma-extensions');
window.Vue = require('vue');
import axios from 'axios';
window.axios = axios;

/**
 * Uncomment below when compiling to production
 */
// Vue.config.devtools = false
// Vue.config.debug = false
// Vue.config.silent = true
