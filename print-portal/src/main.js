import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import CurrentLanguage from '@/components/mixins/CurrentLanguage';
import axios from 'axios';
import i18n from './i18n'
import AuthService from '@/interfaces/authentication'

const getBaseUrl = () => {
    const chunks = window.location.href.split('/print');
    return chunks[0] + '/print/';
}

const baseUrl = getBaseUrl();
const authVaccinations = new AuthService(baseUrl + 'jouw-vaccinaties-redirect');
const authNegativeTests = new AuthService(baseUrl + 'jouw-testresultaat-redirect');

Vue.prototype.authVaccinations = authVaccinations;
Vue.prototype.authNegativeTests = authNegativeTests;

const axiosConfig = {
    baseURL: window.config.api
};
Vue.prototype.$axios = axios.create(axiosConfig)

Vue.mixin(CurrentLanguage);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    authVaccinations,
    authNegativeTests,
    render: h => h(App)
}).$mount('#app')
