// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import axios from 'axios'
axios.defaults.baseURL = 'http://10.202.42.24:8080/sf-cloud-web'
Vue.prototype.axios = axios
    // import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Vuex)
    // Vue.use(ElementUI)
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})