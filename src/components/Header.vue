<template>
  <div class="nav">
    <a href="#">Home</a>
    <a href="#">Add restaurant</a>
    <a href="#">Update restaurant</a>
    <a href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection'
}

</script>
<style>
.nav {
  background-color: darkolivegreen;
  overflow: hidden;
  height: 50px;
}
.nav a {
  float: left;
}
</style>
