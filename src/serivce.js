/**
 * Created by YYD on 4/15/16.
 */
"use strict"
var Vue = require('vue');
var  VueResource = require('vue-resource');
Vue.use(VueResource);

;(function () {
    var vue; // lazy bind
    var baseURL = 'http://120.24.165.155:8083/';
    var asyncData = {
        created: function (){
            if (!vue) {
                console.warn('[vue-async-data] not installed!');
                return;
            }
        },
        compiled: function () {

        },
        methods: {
            $httpGet: function (service, params, cb){
                // GET request
                var queryArray = new Array();
                for(var key in params)
                    queryArray.push(key + "=" + params[key]);
                var queryString = queryArray.join("&");
                var queryURL = baseURL + service + '?' + queryString;
                console.log(queryURL);
                this.$http.get(queryURL).then((response) => {
                    var data = response.data;
                    if(data.code == 0){
                        cb(0, data);
                    }else{
                        cb(1, data);
                    }
                    // success callback
                }, (response) => {
                    cb(-1, {});// error callback
                });
            },
            $httpPost: function (service, params, cb){
                // POST request
                var queryURL = baseURL + service;
                this.$http.post(queryURL, params).then((response) => {
                    // success callback
                    var data = response.data;
                    if(data.code == 0){
                        cb(0, data);
                    }else{
                        cb(1, data);
                    }
                }, (response) => {
                    cb(-1, {});// error callback
                });
            }
        }
    };

    var api = {
        mixin: asyncData,
        install: function (Vue, options) {
            vue = Vue
            Vue.options = Vue.util.mergeOptions(Vue.options, asyncData)
        }
    }

    if(typeof exports === 'object' && typeof module === 'object') {
        module.exports = api
    } else if (typeof window !== 'undefined') {
        window.MyVueAsyncData = api
        Vue.use(api);
    }
})();