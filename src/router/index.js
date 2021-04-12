import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Skincare from "../views/Skincare.vue";
import Brands from "../views/Brands.vue";
import Ask from "../views/Ask.vue";
import Questions from "../views/Questions.vue";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/skincare",
    name: "Skincare",
    component: Skincare,
  },
  {
    path: "/brands",
    name: "Brands",
    component: Brands,
  },
  {
    path: "/ask",
    name: "ask",
    component: Ask,
  },
  {
    path: "/questions",
    name: "questions",
    component: Questions,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
