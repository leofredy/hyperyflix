import { createRouter, createWebHistory } from "vue-router";

import TrendView from "../views/TrendView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    redirect: { name: "Trend" }
  },  
  {
    path: "/trend",
    name: "Trend",
    component: TrendView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundView",
    component: NotFoundView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
