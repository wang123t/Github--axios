<template>
  <div class="List">
    <h2 v-show="Info.isFirst">Welcome to here !</h2>
    <el-card v-show="Info.List.length" class="person" v-for="users in Info.List" :key="users.login">
      <a :href="users.html_url" target="_blank">
        <img :src="users.avatar_url" />
        <h4>{{users.login}}</h4>
      </a>
    </el-card>
    <h2 v-show="Info.isLodging">Lodging...</h2>
    <h2 v-show="Info.errorMsg">{{Info.errorMsg}}</h2>
  </div>
</template>

<script>
export default {
  name: "Uselist",
  data(){
      return{
          Info:{
            List:[],
            isFirst:true,
            isLodging:false,
            errorMsg:''
          }
      }
  },
  methods:{
      demo(InfoObj){
          this.Info = InfoObj//将请求回的数据存在当前组件的data数据的Info中
      }
  },
  mounted(){
      this.$bus.$on('getUsers',this.demo)//绑定自定义事件，接收数据    
  }
};
</script>

<style>
.List{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
}
.person {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin: 20px;
}
h4 , h2{
  text-align: center;
}
.List h2{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
img {
  border-radius: 50%;
  width: 100px;
  border: 1px solid rgb(41, 131, 216);
}
a {
  text-decoration: none;
  color: rgb(51, 158, 247);
}
.el-card:hover{
    background-color: rgb(206, 226, 240);
}
</style>