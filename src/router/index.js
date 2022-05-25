import { createRouter, createWebHistory } from "vue-router";
import Landing from "../pages/landing/index.vue";
import Login from "../pages/auth/login.vue";
import Register from "../pages/auth/register.vue";
import Admin from "../pages/admin/index.vue";
import Customer from "../pages/customer/ListProduct.vue";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/customer",
    component: Customer,
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});
