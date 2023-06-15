<template>
  <div class="nav">
    <router-link to="/" class="header-btn">Home<span></span></router-link>
    <router-link to="/Add" class="header-btn">Add restaurant<span></span></router-link>
    <router-link to="/Update" class="header-btn">Update restaurant<span></span></router-link>
    <a v-on:click="logout" href="#" class="header-btn">Logout<span></span></a>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection',
  methods:{
    logout()
    {
      localStorage.clear();
      this.$router.push({name: 'LoginPage'})
    }
  }
}

</script>
<style>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  height: 100px;
  background-color: #a222ff;
}

.nav a {
  padding-top: 80px;
}

.header-btn {
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  padding: 6px 20px;
  margin-left: 15px;
}

.header-btn:hover {
  color: white;
  text-decoration: underline white;
  transform: scale(1) translateY(0);
  opacity: 1;
}

</style>
