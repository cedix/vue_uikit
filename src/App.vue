<template>
  <div id="app">

    <header>
      <router-link to="/"><h1>Demo page for vue-uikit components</h1></router-link>
    </header>

    <aside-menu />

    <main>
      <router-view />
    </main>

  </div>
</template>

<script>
import AsideMenu from "@/pages/AsideMenu";
import Demo from "@/pages/Demo";

export default {
  name: "App",
  components: {
    AsideMenu,
    Demo
  }
};
</script>

<style lang="scss">
@import "assets/scss/base";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 1em 4em;

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 20% auto 10%;
  grid-template-areas:
    "header  header  header"
    "sidebar content side"
    "footer  footer  footer";
}

a {
  color: #42b983;
}

aside {
  display: block;
  grid-area: sidebar;
  height: 100%;
  padding-top: 40px;
  width: 300px;
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

header {
  grid-area: header;

  a {
    color: black;
    text-decoration: none;
  }
}

main {
  grid-area: content;
  padding-top: 40px;
}

.demo {
  p {
    @include reset;

    margin-bottom: 1em;
  }
}

</style>
