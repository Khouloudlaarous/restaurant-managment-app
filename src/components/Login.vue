<template>
  <img class="logo" src="../assets/logo.jpg"/>
  <h1 class="position">Login Page</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="Enter Email"/>
    <input type="password" v-model="password" placeholder="Enter Password"/>
    <button>Login</button>
    <p>
      <router-link to="/Sign-Up" class="position">Sign Up</router-link>
    </p>
  </div>
</template>

<script>
export default {
   name: 'LoginPage'
}
</script>

<style>

.register .position {
  padding-left: 49%;
}

h1{
  padding-left: 45%;
}
</style>
