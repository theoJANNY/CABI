import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './i18n'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
