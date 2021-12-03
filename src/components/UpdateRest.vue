<template>
  <Header />
  <h1>Welcome to Update Restaurant page</h1>
  <div class="container">
    <form action="">
      <svg width="100%" height="100%">
        <path class="hidden" d="M0 0 H200 V200 H0 Z"></path>
      </svg>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        name="address"
        placeholder="Enter Address"
        v-model="restaurant.address"
      />
      <input
        type="text"
        name="contact"
        placeholder="Enter Contact"
        v-model="restaurant.contact"
      />
      <button type="submit" @click.prevent="updateRestaurant">
        Update restaurant
      </button>
    </form>
  </div>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "UpdateRest",
  components: {
    Header,
  },
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    //console.log(this.$route.params.id);
    // console.log(result);
    this.restaurant = result.data;
  },
  methods: {
    async updateRestaurant() {
      // console.log(this.restaurant);
      const result = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact,
        }
      );
      if (result.status == 200) {
        this.$router.push({ name: "Home" });
      }
      // console.log("result", result);
    },
  },
};
</script>
<style scoped>
.container {
  position: relative;
  width: 80%;
  max-width: 450px;
  margin: 0 auto;
}

form {
  position: relative;
  width: 100%;
  margin: 50px auto;
  padding: 50px;
  background: white;
  text-align: center;
}

input {
  display: inline-block;
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  border: 2px dashed lightblue;
  outline: none;
  font-size: 20px;
  font-family: "Economica", "Arial", sans-serif;
  font-weight: 400;
  transition: all 0.2s ease;
}

input:focus {
  border-color: deepskyblue;
}

button {
  height: 50px;
  padding: 10px 15px;
  margin-top: 20px;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  font-family: "Economica", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 700;
  background: mediumblue;
  transition: all 0.2s ease;
}

button:hover {
  background: midnightblue;
}

button.valid,
button.valid:hover {
  background: mediumseagreen;
}

svg {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
}

svg path {
  stroke-width: 10px;
  stroke: mediumseagreen;
  fill: none;
  opacity: 1;
  transition: opacity 0.5s ease;
}

svg path.hidden {
  opacity: 0;
}

svg path.animate {
  animation: drawBorder 1s linear;
}

@keyframes drawBorder {
  from {
    stroke-dasharray: 4000;
    stroke-dashoffset: 4000;
  }

  to {
    stroke-dasharray: 4000;
    stroke-dashoffset: 0;
  }
}

h3 {
  margin-top: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
}
</style>
