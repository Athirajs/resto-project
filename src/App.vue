<template>
  <router-view></router-view>
</template>

<script>
//import SignUp from './components/SignUp.vue'
export default {
  name: "App",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 100px;
}
.register input,
.login input {
  display: block;
  margin: 30px auto;
  padding: 5px 10px;
  width: 300px;
  height: 30px;
  border: 1px solid skyblue;
  border-radius: 5px;
}
.register button,
.login button {
  outline: none;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  background: skyblue;
  font-size: 25px;
}
</style>
