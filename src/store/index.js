import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//储存state数据
const state = {
  sum:0,
  addname:'',
  list:[
    {id:'01',name:'张三'}
  ]
}

const actions = {//处理业务逻辑，没有的话，可以直接调用mutations,那么在对应组件内直接用commit方法
  jiasingle(context,value){
    console.log('actions中的jiasingle调用')
    if(this.$store,state.sum & 1){
      context.commit('JIA',value)
    }
  },
  jiawait(context,value){
    console.log('actions中的jiawait调用')
    setTimeout(() => {
      context.commit('JIA',value)
    },1000)
  },
}

//mutations处理state的数据
const mutations = {
  JIA(state,value){
    console.log('mutations中的JIA调用')
    state.sum += value
  },
  JIAN(state,value){
    console.log('mutations中的JIAN调用')
    state.sum -= value
  },
  ADD_PERSON(state,value){
    console.log('mutations中的ADD_PERSON调用')
    state.list.unshift(value)//向list数组开头添加一个对象
  }
}
//gtters处理计算属性类似于computed
const getters = {
  bigSum(state){
    return state.sum * 10
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {},
});
