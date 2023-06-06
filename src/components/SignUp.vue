<template>
  <img class="logo" src="../assets/logo.jpg"/>
  <h1 class="text-position">Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name"/>
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="signUp">Sign Up</button>
    <p>
      <router-link to="/Login" class="position">Login</router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name : 'SignUp',
  data()
  {
    return {
      name:'',
      email:'',
      password:''
    }
  },
  methods: {
    async signUp()
    {
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password
      });

      console.warn(result);
      if (result.status === 201)
      {
        localStorage.setItem("user-info", JSON.stringify(result.data))
        await this.$router.push({name: 'Home'})
      }
    }
  }
  // mounted()
  // {
  //   let user= localStorage.getItem('user-info');
  //   if(user)
  //   {
  //       this.$router.push({name:'Home'})
  //   }
  // }
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

.register input, .login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid darkolivegreen;
}

.register button, .login button {
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

.register .position {
  padding-left: 49%;
}

.text-position{
  padding-left: 47%;
}
</style>
