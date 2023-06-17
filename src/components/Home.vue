<template>
  <Header/>
  <h1>Hello {{name}}, Welcome to our Page </h1>
  <table border="1">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>address</td>
      <td>Actions</td>
    </tr>

    <tr v-for="item in restaurants" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.address}}</td>
      <td><router-link to=" '/Update' + item.id"><Update/></router-link></td>
    </tr>
  </table>
</template>
<script>
import Header from "@/components/Header.vue";
import axios from "axios";
import Update from "@/components/Update.vue";
export default {
  name:`Home`,
  data (){
    return {
      name:"",
      restaurants:[],
    }
  },
  components:{
    Update,
    Header
  },
  async mounted()
  {
    let user= localStorage.getItem('user-info');
    this.name=JSON.parse(user).name;
    if(!user)
    {
      this.$router.push({name:'SignUp'})
    }
    let result =await axios.get("http://localhost:3000/user");
    console.warn(result)
    this.restaurants=result.data;
  }
}
</script>
<style>

</style>
