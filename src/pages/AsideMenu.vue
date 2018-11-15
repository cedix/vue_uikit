<template>
  <aside>
    <section class="section-menu">
      <ul>
        <h2>Components</h2>
        <li><router-link to="/buttons">Buttons</router-link></li>
        <li><router-link to="/cards">Cards</router-link></li>
        <li><router-link to="/checkboxes">Checkboxes</router-link></li>
        <li><router-link to="/icons">Icons</router-link></li>
      </ul>
    </section>
  </aside>
</template>
<style lang="scss" scoped>
$link-color: #242424;

a {
  border-bottom: none;
  color: $link-color;
  position: relative;
  text-decoration: none;

  &:visited {
    color: $link-color;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #7c8c9c;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  &.router-link-active {
    font-weight: bold;
  }
}

ul {
  list-style: none;

  li {
    margin: 0.5em 0;
  }
}

.section-menu {
  display: flex;
  flex-flow: column wrap;

  h2 {
    font-size: 1.2em;
    margin: 0 0 1em 0;
  }
}
</style>
