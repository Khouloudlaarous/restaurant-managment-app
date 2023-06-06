<template>
  <img class="logo" src="../assets/logo.jpg"/>
  <h1 class="position">Login Page</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button v-on:click="login">Login</button>
    <p>
      <router-link to="/Sign-Up" class="position">Sign Up</router-link>
    </p>
  </div>
</template>

<script>

import axios from 'axios'
export default {
   name: 'LoginPage',
   data()
   {
     return {
       email: '',
       password: ''
     }
   },
  methods:{
    async login()
     {
       let result = await axios.get(
           `http://localhost:3000/user?email=${this.email}&password=${this.password}`
       )
       console.warn(result)
      }
  }
}
</script>

<style>

.position {
  padding-left: 45%;
}

</style>
