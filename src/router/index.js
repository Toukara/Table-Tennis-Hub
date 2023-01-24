import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PlayersView from "../views/PlayersView.vue";
import ClubsView from "../views/ClubsView.vue";
import PlayerView from "../views/PlayerPage.vue";
import ClubView from "../views/ClubPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/players",
    name: "players",
    component: PlayersView,
  },
  {
    path: "/player/:id",
    name: "player",
    component: PlayerView,
    alias: "/joueur/:id",
  },
  {
    path: "/clubs",
    name: "clubs",
    component: ClubsView,
  },
  {
    path: "/club/:id",
    name: "club",
    component: ClubView,
  },
  {
    path: "/rick",
    name: "rick",
    component: () => import("../views/RickView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
