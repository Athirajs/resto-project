<template>
<img class="logo" src="../assets/resto-logo4.png" >
  <h1>SignUp</h1>

  <div class="register">
      <input type="text" v-model="name" placeholder="Enter name">
      <input type="text" v-model="email" placeholder="Enter email">
      <input type="password" v-model="password" placeholder="Enter password">
      <button @click="signup" type="submit">Sign Up</button>
        <p>
        <router-link to="/login">Login</router-link>
        </p>
      
  </div>
</template>

<script>
import axios from 'axios';
export default {
name: 'SinUp',
data() {
    return {
        name:'',
        email:'',
        password:''
            }
},
methods: {
   async signup(){
        let result = await axios.post("http://localhost:3000/users",{
            email:this.email,
            name:this.name,
            password:this.password
        })
        console.log(result);
        if(result.status==201){
            
            localStorage.setItem("user-info",JSON.stringify(result.data))
            this.$router.push({name:"Home"})
        }
    }
},
mounted() {
    let user = localStorage.getItem('user-info')
    if(user){
        this.$router.push({name:'Home'})
    }
},
}
</script>

