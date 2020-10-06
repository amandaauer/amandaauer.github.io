import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Startscreen from "../views/Startscreen";
import Highscore from "../views/Highscore";
import Spielstart from "../views/Spielstart";
import Freundesuchen from "../views/Freundesuchen";
import Freundeliste from "../views/Freundeliste";
import Schwierigkeitsgrad from "../views/Schwierigkeitsgrad";
import Zeichnen from "../views/Zeichnen";
import Spielende from "../views/Spielende";
import Einstellungen from "../views/Einstellungen";
import AGB from "../views/AGB";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/Einstellungen",
    name: "Einstellungen",
    component: Einstellungen
  },
  {
    path: "/AGB",
    name: "AGB",
    component: AGB
  },

  {
    path: "/Spielende",
    name: "Spielende",
    component: Spielende
  },
  {
    path: "/Zeichnen",
    name: "Zeichnen",
    component: Zeichnen
  },
  {
    path: "/Startscreen",
    name: "Startscreen",
    component: Startscreen
  },
  {
    path: "/Highscore",
    name: "Highscore",
    component: Highscore
  },
  {
    path: "/Spielstart",
    name: "Spielstart",
    component: Spielstart
  },
  {
    path: "/Freundesuchen",
    name: "Freundesuchen",
    component: Freundesuchen
  },
  {
    path: "/Freundeliste",
    name: "Freundeliste",
    component: Freundeliste
  },
  {
    path: "/Schwierigkeitsgrad",
    name: "Schwierigkeitsgrad",
    component: Schwierigkeitsgrad
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
