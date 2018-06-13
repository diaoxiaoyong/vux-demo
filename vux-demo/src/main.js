// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import HelloWorld from '@/components/HelloWorld'
import Vuex from 'vuex';
import router from './router'
import store from './store'
Vue.use(Vuex)
import axios from 'axios'
Vue.prototype.$ajax = axios
const translationsEn = {
  "content": "This is some {type} content"
};

// translations can be kept in separate files for each language
// i.e. resources/i18n/de.json.
const translationsDe = {
  "My nice title": "Ein schöner Titel",
  "content": "Dies ist ein toller Inhalt"
};

// add translations directly to the application
Vue.i18n.add('en', translationsEn);
Vue.i18n.add('de', translationsDe);

// set the start locale to use
Vue.i18n.set('de');

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */HelloWorld
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
