<template>
  <div id="main">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div id="img-container">
      <div class="star">
        <span></span>
      </div>
      <div class="star">
        <span></span>
      </div>
      <div class="star">
        <span></span>
      </div>
      <div class="star">
        <span></span>
      </div>
      <div class="star">
        <span></span>
      </div>
      <div class="star">
        <span></span>
      </div>
      <div class="star">
        <span></span>
      </div>
      <div class="static star-1"></div>
      <div class="static star-2"></div>
      <div class="static star-3"></div>
      <div id="form-container">
      </div>
      <img id="img" src="../assets/background.jpg" alt="img" />
    </div>
    <div id="txt">
      <p>User Login</p>
      <div class="input-container">
         <input type="text" v-model="name" placeholder="Enter Name"/>
      </div>
      <div class="input-container">
         <input type="text" v-model="email" placeholder="Enter Email"/>
      </div>
      <div class="input-container">
         <input type="password" v-model="password" placeholder="Enter Password"/>
      </div>
         <button v-on:click="signUp" type="submit">Sign Up</button>
    <p>
      <router-link to="/Login" class="position">Login</router-link>
    </p>
  </div>
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


.register input, .login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
}

.register button, .login button {
  width: 320px;
  height: 40px;
  display: block;
  margin-right: auto;
  margin-left: auto;
  background-color: darkolivegreen;
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
