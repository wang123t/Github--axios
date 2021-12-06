<template>
  <el-card>
    <div class="search">
      <h2>Search Github Username</h2>
      <div class="enter">
        <input type="text" placeholder="search usename" v-model="keyWord">
        <el-button type="primary" @click='searchUsers'>SEARCH</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  data(){
      return{
          keyWord:''
      }
  },
  methods:{
      searchUsers(){
          //请求前List展示
          this.$bus.$emit('getUsers',{isFirst:false,isLodging:true,errorMsg:'',List:[]})//触发$emit提供数据
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
      },
  },
};
</script>

<style scoped>
.el-card{
    background-color: rgb(204, 230, 241);
    margin: 20px;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  height: 35px;
  font-size: 15px;
  width: 400px;
  margin: 20px;
  border-radius: 8px;
  border: 1px solid gray;
}
</style>