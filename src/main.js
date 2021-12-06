import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {Button,Card} from 'element-ui';//局部按需引入

Vue.config.productionTip = false;

//自动注册element-ui组件
Vue.use(Button);
Vue.use(Card);

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this//安装全局事件总线
  }
}).$mount("#app");
