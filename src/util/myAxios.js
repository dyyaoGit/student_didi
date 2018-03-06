import Vue from 'vue'
import myAxios from './base'
import allApi from './allApi'

var xhr = {
  get: function(url,params) {
    return myAxios.get(allApi.url,{params})
  }
}

Vue.prototype.$axios = xhr;
