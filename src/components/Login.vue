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
          <input type="text" v-model="email" placeholder="Enter Email"/>
      </div>
      <div class="input-container">
          <input type="password" v-model="password" placeholder="Enter Password"/>
      </div>
      <button v-on:click="login" type="submit">Login</button>
      <p>
        <router-link to="/Sign-Up">Sign Up</router-link>
      </p>
    </div>
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

#main {
  background: linear-gradient(to bottom, #bd7dff, #361f88);
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;

}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 97vh;
  overflow: hidden;
  box-sizing: border-box;
}

.circles li{
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background: rgba(255, 255, 255, 0.2);
  animation: animate 25s linear infinite;
  bottom: -150px;

}

.circles li:nth-child(1){
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}


.circles li:nth-child(2){
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3){
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4){
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5){
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6){
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7){
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8){
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9){
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10){
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}



@keyframes animate {

  0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }

}

#img-container {
  width: max(350px, 38%);
  height: 325px;
  position: relative;
  overflow: hidden;
  margin-top: 4rem;
  border-radius: 1em 1em 0 0;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
}


#img {
  min-width: 100%;
  height: 100%;
  object-fit: cover;
}

#txt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  width: max(350px, 38%);
  height: 400px;
  padding:20px 20px 40px;
  margin-bottom: 3.5rem;
  box-sizing: border-box;
  border-radius: 0 0 1em 1em;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

span {
  width: 100px;
  height: 2px;
  display: block;
  background-image: linear-gradient(to right, #fbf9fe, transparent);
  margin: 25px;
  margin-bottom: 50px;
  animation: shooting 2s linear infinite;
  opacity: 0;
}

span::before {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 5px;
  height: 5px;
  background-color: #fff;
  box-shadow: 0 0 6px #fff;
  border-radius: 50px;
}

.star {
  position: absolute;
  top: 0;
  right: 0;
  transform: rotateZ(45deg);
}

.star:nth-child(2) {
  right: 200px;
}

.star:nth-child(2) span {
  animation-delay: 0.5s;
}

.star:nth-child(3) {
  right: 400px;
}

.star:nth-child(3) span {
  animation-delay: 1s;
}

.star:nth-child(4) {
  right: 600px;
}

.star:nth-child(4) span {
  animation-delay: 1.5s;
}

.star:nth-child(5) {
  right: -600px;
}

.star:nth-child(5) span {
  animation-delay: 1s;
}

.star:nth-child(6) {
  right: -1000px;
}

.star:nth-child(6) span {
  animation-delay: 2.5s;
}

.star:nth-child(7) {
  right: 1400px;
}

.star:nth-child(8) span {
  animation-delay: 1s;
}

.static,
.static:before,
.static:after {
  height: 0.25em;
  width: 0.25em;
  background-color: #f9f4ff;
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  animation: twinkle 1.9s infinite;
}

.star-1 {
  top: 1em;
  left: 18.75em;
}

.star-1:before {
  content: "";
  top: 1.9em;
  left: -16.4em;
  animation-delay: 0.3s;
}

.star-1:after {
  content: "";
  left: -12.8em;
  top: 5em;
  animation-delay: 0.7s;
}

.star-2 {
  left: 44.25em;
  top: 1.12em;
  animation-delay: 0.2s;
}

.star-2:before {
  content: "";
  left: -10.5em;
  top: 0.75em;
  animation-delay: 0.9s;
}

.star-3 {
  left: 15em;
  top: 1.9em;
  animation-delay: 0.1s;
}

.star-3:before {
  content: "";
  top: 1em;
  left: 15em;
}

@keyframes twinkle {
  50% {
    opacity: 1;
  }
}

@keyframes shooting {
  0% {
    transform: translateY(0) rotate(-90deg);
    opacity: 1;
  }

  100% {
    transform: translateY(600px) rotate(-90deg);
    opacity: 0;
  }
}

#form-container {
  position: absolute;
  top: 53%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: start;
  color: white;
}
#form-container :first-child{
  font-size: 1.5em;
  margin-bottom: -6px;
}
#form {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font);
  border: none;
}


#register {
  position: absolute;
  color: white;
  transform: translate(-50%, -50%);
  font-size: 18px;
  text-decoration: none;
  bottom: 1%;
  left: 5rem;
}

.input-container {
  position: relative;
  margin-bottom: 15px;
}

.input-container img {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
}

.input-container input {
  padding-left: 37px;
  font-family: var(--font);
  background-color: #9e42f4;
  font-size: 20px;
  width: 18rem;
  height: 30px;
  border-radius: 15px;
  border: none;
}
.input-container input::placeholder {
  padding-left: 25px;
}

.container {
  position: relative;
  white-space: nowrap;
  font-size: 1.1em;
}

.container a {
  color: var(--text-color);
  text-decoration: none;
  margin-left: 55px;
}

.container input[type="checkbox"] {
  position: absolute;
  opacity: 0;
}

.container label {
  display: inline-block;
  position: relative;
  padding-left: 25px;
  cursor: pointer;
}

.container label::before {
  content: "";
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #9e42f4;
  border-radius: 50%;
  position: absolute;
  left: 3px;
  top: 50%;
  transform: translateY(-50%);
}

.container input[type="checkbox"]:checked + label::before {
  content: "\2713";
  font-size: 14px;
  color: white;
}
input[type="text"],
input[type="password"] {
  outline: none;
}
input[type="text"]:focus,
input[type="password"]:focus {
  outline: 2px solid #a222ff;
}


:root {
  --text-color: #a222ff;
  --font: "Outfit", sans-serif;
  --placeholder-color: white;
}

body {
  font-family: var(--font);

}

.input-container input {
  color: white;
  border: none;
}

.input-container input::placeholder {
  color: var(--placeholder-color);
}

label {
  color: var(--text-color);
}


#txt > p {
  color: var(--text-color);
  font-family: var(--font);
  margin-bottom: 30px;
  font-size: 1.6em;
}
button[type="submit"] {
  margin-top: 3rem;
  font-size: 1.5em;
  background-color: var(--text-color);
  border-radius: 5px;
  color: #f9fdfe;
  width: 8rem;
  height: 41px;
  font-family: "Sarpanch", sans-serif;
  border: none;
  z-index: 1;

  cursor: pointer;
}
button[type="submit"]:hover {
  background-color: #6f05d1;
  color: white;
}

</style>
