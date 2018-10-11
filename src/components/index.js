import Vue from "vue";

import UkCard from "./Card.vue";

const Components = {
  UkCard
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
