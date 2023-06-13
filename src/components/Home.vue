<template>
  <Header/>
  <h1 class="home">Home Page</h1>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name:`Home`,
  components:{
    Header
  },
  // mounted()
  // {
  //   let user= localStorage.getItem('user-info');
  //   if(!user)
  //   {
  //     this.$router.push({name:'SignUp'})
  //   }
  // }
}
</script>
<style>
.home{
  margin-left: 45%;
  padding-top: 50px;
}
</style>
