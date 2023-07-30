import { createApp } from "vue";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Header from "./components/Header.vue";
import { createChakra } from "@chakra-ui/vue-next";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret, faBlog } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faBlog);

const chakra = createChakra();

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
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(chakra);
app.use(router);

app.mount("#app");
