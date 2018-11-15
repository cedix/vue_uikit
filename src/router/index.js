import Vue from "vue";
import Router from "vue-router";

import Buttons from "@/pages/components/Buttons";
import Cards from "@/pages/components/Cards";
import Checkboxes from "@/pages/components/Checkboxes";
import Icons from "@/pages/components/Icons";

import Demo from "@/pages/Demo";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Demo",
      component: Demo
    },
    {
      path: "/buttons",
      name: "Buttons",
      component: Buttons
    },
    {
      path: "/cards",
      name: "Cards",
      component: Cards
    },
    {
      path: "/checkboxes",
      name: "Checkboxes",
      component: Checkboxes
    },
    {
      path: "/icons",
      name: "Icons",
      component: Icons
    }
  ]
});
