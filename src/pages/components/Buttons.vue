<template>
  <section class="section-buttons" id="buttons">
    <h2 class="section-title">Buttons</h2>
    <uk-card class="card-demo-buttons" title="Basic usage">
      <uk-button class="btn-demo">Primary</uk-button>
      <uk-button class="btn-demo uk-color-secondary">Secondary</uk-button>
      <uk-button class="btn-demo uk-color-info">Info</uk-button>
      <uk-button class="btn-demo uk-color-error">Error</uk-button>
      <uk-button class="btn-demo uk-color-success">Success</uk-button>
      <uk-button class="btn-demo uk-color-warning">Error</uk-button>
    </uk-card>
    <uk-card class="card-demo-buttons" title="Disabled Button">
      <uk-button class="btn-demo" disabled>Disabled Primary Button</uk-button>
      <uk-button class="btn-demo uk-color-secondary" disabled>Disabled Secondary Button</uk-button>
      <uk-button class="btn-demo uk-color-info" disabled>Disabled Info Button</uk-button>
      <uk-button class="btn-demo uk-color-error" disabled>Disabled Error Button</uk-button>
      <uk-button class="btn-demo uk-color-success" disabled>Disabled Success Button</uk-button>
      <uk-button class="btn-demo uk-color-warning" disabled>Disabled Warning Button</uk-button>
    </uk-card>
  </section>
</template>
<script>
import UkButton from "@/components/Button";
import UkCard from "@/components/Card";

export default {
  name: "ButtonsDemo",

  components: {
    UkButton,
    UkCard
  }
};
</script>
<style lang="scss" scoped>

.btn-demo {
  margin: 0.5em;
}
.card-demo-buttons {
  margin-top: 1em;

  &:first-of-type {
    margin-top: 0;
  }
}

.section-buttons {
  display: grid;
  grid-gap: 30px;

  h2 {
    margin: 0;
  }
}
</style>
