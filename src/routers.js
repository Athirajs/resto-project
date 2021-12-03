import { createRouter, createWebHistory } from "vue-router";
//import Home from "./components/Home.vue"
//import SignUp from './components/SignUp.vue'

const routes = [
  {
    name: "Home",
    path: "/",

    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Home.vue"),
  },
  {
    name: "SignUp",
    path: "/sign-up",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/SignUp.vue"),
  },
  {
    name: "Login",
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/Login.vue"),
  },
  {
    name: "Add Restaurant",
    path: "/addRestaurant",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/AddRest.vue"),
  },
  {
    name: "Update Restaurant",
    path: "/updateRestaurant/:id",
    component: () =>
      import(/* webpackChunkName: "about" */ "./components/UpdateRest.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
