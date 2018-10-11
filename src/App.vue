<template>
  <div id="app">
    <!--<img width="25%" src="./assets/logo.png">-->
    <Demo/>
  </div>
</template>

<script>
import Demo from "./pages/Demo";

export default {
  name: "App",
  components: {
    Demo
  }
};
</script>

<style>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin: 1em 4em;
}

</style>
