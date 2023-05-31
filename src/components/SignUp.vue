<template>
  <img class="logo" src="../assets/logo.jpg"/>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name"/>
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="signUp">Sign Up</button>

  </div>
</template>
<script>
import axios from "axios";
export default {
  name : 'SignUp',
  data()
  {
    return{
      name:'',
      email:'',
      password:''
    }
  },
  methods:{
    async signUp()
    {
      let result = await axios.post("http://localhost:3000/users",{
           name:this.name,
           email:this.email,
           password:this.password
      });

      console.warn(result);
      if(result.status===201)
      {
        alert("you have successfully logged in");
        localStorage.setItem("user-info",JSON.stringify(result.data))
      }
  }
}
}

</script>

<style>
.logo {
  width: 10%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 100px;
}

.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid darkolivegreen;
}

.register button {
  width: 320px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid darkolivegreen;
  background: darkolivegreen;
  color: white;
  cursor: pointer;
}
</style>
