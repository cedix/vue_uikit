<template>
  <section class="section-cards" id="cards">
    <h2 class="section-title">Cards</h2>
    <uk-card>This is a standard card</uk-card>
    <uk-card closable>This is a standard closable card</uk-card>
    <uk-card title="My Title" bg-color="#fbfbe8" closable>
      <p>
        This is a standard card with a Title and a custom
        <span style="color: #c3c021;">color</span>
      </p>
    </uk-card>
    <uk-card title="My Title" rounded closable>
      Because Cards are by default <b>squared</b> we can have rounded corners by
      setting the property <b>rounded</b> to true
    </uk-card>
    <uk-card title="My Primary Card" class="uk-color-primary" closable>
      <p>
        This is a card colored with
        <span class="uk-color-primary">primary</span> colors.
      </p>
    </uk-card>
    <uk-card title="My Secondary Card" class="uk-color-secondary" closable>
      <p>
        This is a card colored with
        <span class="uk-color-secondary">secondary</span> colors.
      </p>
    </uk-card>
    <uk-card title="My Info Card" class="uk-color-info" closable>
      <p>
        This is a card colored with
        <span class="uk-color-info">info</span> colors.
      </p>
    </uk-card>
    <uk-card
      title="My Error Card"
      class="uk-color-error"
      :elevation="4"
      closable
    >
      <p>
        This is a card colored with
        <span class="uk-color-error">error</span> colors.
      </p>
      <p>
        You can also change the elevation with property <b>elevation</b> which
        accepts values from <b>0</b> to <b>9</b>. Here <b>4</b> is set.
      </p>
    </uk-card>
    <uk-card
      title="My Warning Card"
      class="uk-color-warning"
      :elevation="6"
      closable
    >
      <p>
        This is a card colored with
        <span class="uk-color-warning">warning</span> colors.
      </p>
      <p>
        You can also change the elevation with property <b>elevation</b> which
        accepts values from <b>0</b> to <b>9</b>. Here <b>6</b> is set.
      </p>
    </uk-card>
    <uk-card
      title="My Success Card"
      class="uk-color-success"
      :elevation="8"
      closable
    >
      <p>
        This is a card colored with
        <span class="uk-color-success">success</span> colors.
      </p>
      <p>
        You can also change the elevation with property <b>elevation</b> which
        accepts values from <b>0</b> to <b>9</b> (only accepts numbers). Here
        <b>8</b> is set.
      </p>
    </uk-card>
  </section>
</template>
<script>
import UkCard from "@/components/Card";

export default {
  name: "CardsDemo",

  components: {
    UkCard
  }
};
</script>
<style lang="scss" scoped>
.section-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
}

.section-title {
  margin: 0;
  grid-column: span 2;
  width: 100%;
}
</style>
