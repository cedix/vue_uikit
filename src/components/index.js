import Vue from "vue";

import UkButton from "./Button.vue";
import UkCard from "./Card.vue";

const Components = {
  UkButton,
  UkCard
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
