<template>
  <div class="nav">
    <a href="#" class="header-btn">Home<span></span></a>
    <a href="#" class="header-btn">Add restaurant<span></span></a>
    <a href="#" class="header-btn">Update restaurant<span></span></a>
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
  min-height: 50px;
  height: 50px;
}

.header-btn {
  font-size: 1.1rem;
  color: black;
  text-decoration: none;
  padding: 6px 20px;
  margin-left: 15px;
  border-radius: 15px;
  border-bottom: 3px solid black;
}

.header-btn:hover {
  color: darkgoldenrod;
  transform: scale(1) translateY(0);
  opacity: 1;
  letter-spacing: 2px;
}

</style>
