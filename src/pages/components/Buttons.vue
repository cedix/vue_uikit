<template>
  <section class="section-buttons" id="buttons">
    <h2 class="section-title">Buttons</h2>
    <uk-card class="card-demo-buttons" title="Basic usage">
      <uk-button>Primary</uk-button>
      <uk-button>Secondary</uk-button>
    </uk-card>
    <uk-card class="card-demo-buttons" title="Disabled Button">
      <uk-button disabled>Disabled Button</uk-button>
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
