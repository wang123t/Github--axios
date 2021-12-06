1.Github用户名搜搜索List(案例)

2.准备：安装axios, element-Ui, babel-plugin-component(按需引入的插件)

3.创建2个组件，Search组件和Uselist组件，注册并引入到App组件

4.按需引入elementUI,需要手动配置，配置要借助 babel-plugin-component 插件，安装【npm install babel-plugin-component -D】
    (1)找到src文件下的babel.config.js文件，更改配置如下：

    module.exports = {
        presets: ["@vue/cli-plugin-babel/preset",["@babel/preset-env", { "modules": false }]],
        "plugins": [
            [
            "component",
            {
                "libraryName": "element-ui",
                "styleLibraryName": "theme-chalk"
            }
            ]
        ]
    };

    (2)更改"es2015"为"@babel/preset-env"

5.如果要关闭eslint语法检查，需要在根文件夹下创建一个vue.config.js文件，配置如下：
    module.exports = {
        lintOnSave:false,
    }
6.Search组件内绑定点击事件，通过axios发送网络请求给Github(https://api.github.com/search/users?q=${this.keyWord}),携带所搜索的query参数

axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
    response => {
        console.log('请求成功了');
        //请求成功List展示
        this.$bus.$emit('getUsers',{isLodging:false,errorMsg:'',List:response.data.items})
    },
    error => {
        console.log('请求失败了');
        //请求失败List展示
        this.$bus.$emit('getUsers',{isLodging:false,errorMsg:error.message,List:[]})
    }
)

7.因为使用全局事件总线绑定点击事件，实现组件间的通讯，所以入口文件main.js里面配置如下：

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
