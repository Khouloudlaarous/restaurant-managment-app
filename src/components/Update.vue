<template>
  <Header/>
  <h1>Update restaurantsn Page</h1>
  <form class="container">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurants.name"/>
    <input type="text" name="address" placeholder="Enter address" v-model="restaurants.address"/>
    <input type="text" name="contact" placeholder="Enter contact" v-model="restaurants.contact"/>
    <button type="button">Update restaurant</button>
  </form>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: `Update`,
  components: {
    Header,
  },
  data() {
    return {
      restaurants: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
}
</script>

