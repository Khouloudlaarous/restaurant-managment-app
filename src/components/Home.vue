<template>
  <Header/>
  <h1 class="home">Hello {{name}}, Welcome on our Page </h1>
  <table border="1">
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{item.id}}</td>
      <td>{{item.name}}</td>
      <td>{{item.address}}</td>
    </tr>
  </table>
</template>
<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name:`Home`,
  data (){
    return {
      name:'',
      restaurants: [],
    }
  },
  components:{
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
.home{
  margin-left: 45%;
  padding-top: 50px;
}
</style>
