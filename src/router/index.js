import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/players",
    name: "players",
    component: () => import("../views/PlayersView.vue"),
  },
  {
    path: "/player/:id",
    name: "player",
    component: () => import("../views/PlayerPage.vue"),
  },
  {
    path: "/clubs",
    name: "clubs",
    component: () => import("../views/ClubsView.vue"),
  },
  {
    path: "/club/:id",
    name: "club",
    component: () => import("../views/ClubPage.vue"),
  },
  {
    path: "/rick",
    name: "rick",
    component: () => import("../views/RickView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("../views/NewsView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
