import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Header from "./components/Header.vue";

const routes = [
  {
    path: "/",
    component: () => import("./pages/Home.vue"),
  },
  {
    path: "/posts",
    component: () => import("./pages/Posts.vue"),
  },
  {
    path: "/contact",
    component: () => import("./pages/Contact.vue"),
  },
  {
    path: "/about",
    component: () => import("./pages/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.component("Header", Header); // Global component, used in all pages

app.use(router);

app.mount("#app");