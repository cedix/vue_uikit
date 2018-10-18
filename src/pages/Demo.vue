<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section id="cards">
      <h2 class="section-title">Cards</h2>
      <uk-card>This is a standard card</uk-card>
      <uk-card closable>This is a standard closable card</uk-card>
     <uk-card title="My Title" closable>This is a standard card with a Title</uk-card>
     <uk-card title="My Title" square closable>Because Cards are by default rounded we can have square corners by setting the property <b>square</b> to true</uk-card>
     <uk-card title="My Error Card" class="uk-color-error" :elevation=4 closable>
        <p>This is a card colored with <span class="uk-color-error">error</span> colors.</p>
        <p>You can also change the elevation with property <b>elevation</b> which accepts values from <b>0</b> to <b>9</b>. Here <b>4</b> is set.</p>
      </uk-card>
     <uk-card title="My Warning Card" class="uk-color-warning" :elevation=6 closable>
        <p>This is a card colored with <span class="uk-color-warning">warning</span> colors.</p>
        <p>You can also change the elevation with property <b>elevation</b> which accepts values from <b>0</b> to <b>9</b>. Here <b>6</b> is set.</p>
      </uk-card>
     <uk-card title="My Success Card" class="uk-color-success" :elevation=8 closable>
        <p>This is a card colored with <span class="uk-color-success">success</span> colors.</p>
        <p>You can also change the elevation with property <b>elevation</b> which accepts values from <b>0</b> to <b>9</b> (only accepts numbers). Here <b>8</b> is set.</p>
      </uk-card>
    </section>
  </div>
</template>

<script>
import Colors from "../assets/scss/_colors.scss"
import UkCard from "../components/Card"

export default {
  name: "Demo",

  components: {
    UkCard
  },

  data() {
    return {
      msg: "Demo page for vue-uikit components"
    };
  },

  methods: {
    setStyle: function () {
      let title = document.getElementsByClassName('section-title');
      let color = Colors.colorsuccess;
      
      if (color && color !== undefined) {
        title.style.color = Colors.colorsuccess;
      }
    }
  },

  mounted() {
    this.setStyle();
  }
};
</script>

<style lang="scss">

  a {
    color: #42b983;
  }

  h1 {
    margin: 0;
    padding: 1em 0;
    text-align: center;
  }

  h1,
  h2 {
    font-weight: normal;
  }

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  /* BASE elements modifiers  */
  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  }


  /* CLASSES */
  .section-title {
    margin: 1em 0 0 0;
    grid-column: span 2;
    width: 100%;
  }

</style>
