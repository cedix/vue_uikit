<template>
  <!--
    <label class="uk-checkbox" role="checkbox">
      <input class="uk-checkbox-input" type="checkbox" />
      <span class="uk-checkbox-label"><slot /></span>
    </label>
  -->
  <div class="pretty p-default p-curve p-thick">
    <input type="checkbox" />
    <div class="state p-primary-o">
      <label><slot /></label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String
  }
};
</script>
<style lang="scss" scoped>
/* IMPORTS */
@import "../assets/scss/base";
</style>
