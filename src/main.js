import '@babel/polyfill';
import '@fortawesome/fontawesome-free/css/all.css';
import Vue from 'vue';
import './plugins/vuetify';
import './filters';
import App from './App.vue';
import router from './router';
import store from './store/store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
