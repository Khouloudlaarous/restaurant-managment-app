<template>
  <Header/>
  <h1>Add restaurant Page</h1>
  <form class="container">
    <input type="text" name="name" placeholder="Enter Name" v-model="restaurants.name"/>
    <input type="text" name="address" placeholder="Enter address" v-model="restaurants.address"/>
    <input type="text" name="contact" placeholder="Enter contact" v-model="restaurants.contact"/>
    <button type="button" v-on:click="addRestaurant">Add New restaurant</button>
  </form>
</template>
<script>
import Header from "@/components/Header.vue";
import axios from "axios";
export default {
  name: `Add`,
  components: {
    Header
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
  methods: {
    async addRestaurant() {
      console.warn(this.restaurants)
      const result = await axios.post("http://localhost:3000/restaurants",
          {
            name: this.restaurants.name,
            address: this.restaurants.address,
            contact: this.restaurants.contact,
          });
      console.warn("result", result)
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'Add'})
    }
  }
}
</script>
<style>

input {
  position: relative;
  margin-bottom: 10px;
  width: 230px;
  height: 20px;
}

h1 {
  text-align: center;
}

</style>

