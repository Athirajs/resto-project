<template>
  <Header />
  <h1>Hi, {{ name }} Welcome to home page</h1>
  <table border="1">
    <tr class="header">
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Action</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/updateRestaurant/' + item.id">Update</router-link>
        <button @click="deleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  async mounted() {
    this.loadData();
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );

      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurants");

      this.restaurants = result.data;
      // console.warn(this.restaurants);
    },
  },
};
</script>
<style scoped>
table {
  margin: 20px auto;
}
tr.header {
  font-weight: bold;
  font-size: 18px;
}
td {
  width: 160px;
  height: 40px;
}
</style>
