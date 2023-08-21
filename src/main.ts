// This code initializes the Vue application and sets up the router

import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

type Route = {
  path: string;
  component: any;
};

const routes: Route[] = [
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

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(router);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faUserSecret, faBlog, faEye } from "@fortawesome/free-solid-svg-icons";

// icons used in the app
library.add(faUserSecret, faBlog, faEye);
app.component("font-awesome-icon", FontAwesomeIcon);

// chakra-ui
import { createChakra } from "@chakra-ui/vue-next";

const chakra = createChakra();
app.use(chakra);

import Header from "./components/Header.vue";
app.component("Header", Header); // Global component, used in all pages

app.mount("#app");
