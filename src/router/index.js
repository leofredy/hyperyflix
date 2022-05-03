import { createRouter, createWebHistory } from "vue-router";

import TrendView from "../views/TrendView.vue";

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
    component: () => import(/* webpackChunkName: "NotFoundView" */ "@/views/NotFoundView.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { 
      top: 0,
      behavior: "smooth",
    }
  },
});

export default router;
