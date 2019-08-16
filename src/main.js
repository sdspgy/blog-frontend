import Vue from 'vue';
import router from "./router";
import VueI18n from 'vue-i18n';
import {messages} from './components/common/i18n';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import http from './utils/httpRequest';
import VueCookie from 'vue-cookie';
import qs from 'qs';

Vue.config.productionTip = false
Vue.use(VueI18n);
Vue.use(VueCookie);
Vue.use(ElementUI, {
  size: 'small',
  zIndex: 3000
});
Vue.use(qs);
// 挂载全局
Vue.prototype.$http = http;

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

new Vue({
  router,
  i18n,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
