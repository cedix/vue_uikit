<template>
  <section class="section-buttons" id="buttons">
    <h2 class="section-title">Buttons</h2>
    <uk-card class="card-demo-buttons" title="Standard buttons">
      <uk-button class="btn-demo">Primary</uk-button>
      <uk-button class="btn-demo" color="secondary">Secondary</uk-button>
      <uk-button class="btn-demo" color="info">Info</uk-button>
      <uk-button class="btn-demo" color="error">Error</uk-button>
      <uk-button class="btn-demo" color="success">Success</uk-button>
      <uk-button class="btn-demo" color="warning">Warning</uk-button>
    </uk-card>
    <uk-card class="card-demo-buttons" title="Disabled standard buttons">
      <uk-button class="btn-demo" disabled>Disabled Primary Button</uk-button>
      <uk-button class="btn-demo" color="secondary" disabled
        >Disabled Secondary Button</uk-button
      >
      <uk-button class="btn-demo" color="info" disabled
        >Disabled Info Button</uk-button
      >
      <uk-button class="btn-demo" color="error" disabled
        >Disabled Error Button</uk-button
      >
      <uk-button class="btn-demo" color="success" disabled
        >Disabled Success Button</uk-button
      >
      <uk-button class="btn-demo" color="warning" disabled
        >Disabled Warning Button</uk-button
      >
    </uk-card>
    <uk-card class="card-demo-buttons" title="Plain buttons">
      <uk-button class="btn-demo" type="plain">Primary</uk-button>
      <uk-button class="btn-demo" type="plain" color="secondary"
        >Secondary</uk-button
      >
      <uk-button class="btn-demo" type="plain" color="info">Info</uk-button>
      <uk-button class="btn-demo" type="plain" color="error">Error</uk-button>
      <uk-button class="btn-demo" type="plain" color="success"
        >Success</uk-button
      >
      <uk-button class="btn-demo" type="plain" color="warning"
        >Warning</uk-button
      >
    </uk-card>
    <uk-card class="card-demo-buttons" title="Disabled Plain buttons">
      <uk-button class="btn-demo" type="plain" disabled
        >Disabled Primary Button</uk-button
      >
      <uk-button class="btn-demo" type="plain" color="secondary" disabled
        >Disabled Secondary Button</uk-button
      >
      <uk-button class="btn-demo" type="plain" color="info" disabled
        >Disabled Info Button</uk-button
      >
      <uk-button class="btn-demo" type="plain" color="error" disabled
        >Disabled Error Button</uk-button
      >
      <uk-button class="btn-demo" type="plain" color="success" disabled
        >Disabled Success Button</uk-button
      >
      <uk-button class="btn-demo" type="plain" color="warning" disabled
        >Disabled Warning Button</uk-button
      >
    </uk-card>
    <uk-card class="card-demo-buttons" title="Text buttons">
      <uk-button class="btn-demo" type="text">Primary</uk-button>
      <uk-button class="btn-demo" type="text" color="secondary"
        >Secondary</uk-button
      >
      <uk-button class="btn-demo" type="text" color="info">Info</uk-button>
      <uk-button class="btn-demo" type="text" color="error">Error</uk-button>
      <uk-button class="btn-demo" type="text" color="success"
        >Success</uk-button
      >
      <uk-button class="btn-demo" type="text" color="warning"
        >Warning</uk-button
      >
    </uk-card>
    <uk-card class="card-demo-buttons" title="Disabled Text buttons">
      <uk-button class="btn-demo" type="text" disabled
        >Disabled Primary Button</uk-button
      >
      <uk-button class="btn-demo" type="text" color="secondary" disabled
        >Disabled Secondary Button</uk-button
      >
      <uk-button class="btn-demo" type="text" color="info" disabled
        >Disabled Info Button</uk-button
      >
      <uk-button class="btn-demo" type="text" color="error" disabled
        >Disabled Error Button</uk-button
      >
      <uk-button class="btn-demo" type="text" color="success" disabled
        >Disabled Success Button</uk-button
      >
      <uk-button class="btn-demo" type="text" color="warning" disabled
        >Disabled Warning Button</uk-button
      >
    </uk-card>
    <uk-card class="card-demo-buttons" title="Circle buttons">
      <div class="buttons-wrapper">
        <uk-button class="btn-demo" type="circle" icon="add"></uk-button>
        <uk-button class="btn-demo" type="circle" color="secondary"
          >SE</uk-button
        >
        <uk-button class="btn-demo" type="circle" color="info">I</uk-button>
        <uk-button class="btn-demo" type="circle" color="error">ERR</uk-button>
        <uk-button class="btn-demo" type="circle" color="success">UK</uk-button>
        <uk-button class="btn-demo" type="circle" color="warning"
          >WARN</uk-button
        >
      </div>
    </uk-card>
    <uk-card class="card-demo-buttons" title="Disabled Circle buttons">
      <div class="buttons-wrapper">
        <uk-button
          class="btn-demo"
          type="circle"
          icon="add"
          disabled
        ></uk-button>
        <uk-button class="btn-demo" type="circle" color="secondary" disabled
          >SE</uk-button
        >
        <uk-button class="btn-demo" type="circle" color="info" disabled
          >I</uk-button
        >
        <uk-button class="btn-demo" type="circle" color="error" disabled
          >ERR</uk-button
        >
        <uk-button class="btn-demo" type="circle" color="success" disabled
          >UK</uk-button
        >
        <uk-button class="btn-demo" type="circle" color="warning" disabled
          >WARN</uk-button
        >
      </div>
    </uk-card>
    <uk-card class="card-demo-buttons" title="Elevated buttons">
      <div class="buttons-wrapper">
        <uk-button
          class="btn-demo"
          type="circle"
          icon="add"
          :elevation="2"
        ></uk-button>
        <p>
          Circle buttons can be elevated from 1 to 9 (0 would not elevate the
          button)
        </p>
      </div>
      <div class="buttons-wrapper">
        <uk-button
          class="btn-demo"
          type="plain"
          color="secondary"
          :elevation="4"
          >Button</uk-button
        >
        <p>
          Plain buttons can be elevated from 1 to 9 (0 would not elevate the
          button)
        </p>
      </div>
      <div class="buttons-wrapper">
        <uk-button class="btn-demo" color="error" :elevation="4"
          >Button</uk-button
        >
        <p>Round buttons can't be elevated</p>
      </div>
      <div class="buttons-wrapper">
        <uk-button class="btn-demo" type="text" color="info" :elevation="4"
          >Button</uk-button
        >
        <p>Text buttons can't be elevated</p>
      </div>
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

.buttons-wrapper {
  display: flex;
  flex-flow: row wrap;

  p {
    margin: auto;
    text-align: left;
    overflow-wrap: break-word;
  }
}

.card-demo-buttons {
  margin-top: 1em;
}

.section-buttons {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  h2 {
    grid-column-end: span 2;
    margin: 0;
  }
}
</style>
