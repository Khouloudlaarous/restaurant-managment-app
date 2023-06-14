<template>
  <router-view/>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap" rel="stylesheet">
  <link href="https://fonts.google.com/specimen/Sarpanch?preview.text=LOGIN&preview.size=27&preview.text_type=custom" rel="stylesheet">
</template>
<script>
export default {
  name: 'App',
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
  border: 1px solid darkolivegreen;
}

.register button, .login button {
  width: 50px;
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
