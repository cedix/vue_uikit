<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <section id="cards">
      <h2 class="section-title">Cards</h2>
      <uk-card>This is a standard card</uk-card>
      <uk-card closable>This is a standard closable card</uk-card>
     <uk-card title="My Title" closable>This is a card with a Title</uk-card>
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
      console.log(Colors);
      
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
    margin: 0;
    grid-column: span 2;
    width: 100%;
  }

</style>
