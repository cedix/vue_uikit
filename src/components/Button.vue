<template>
  <button 
    type="button"
    class="uk-button"
    @click="handleClick"
    :autofocus="autofocus"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
<script>
export default {
  name: "Button",

  props: {
    autofocus: Boolean,
    circle: Boolean,
    disabled: Boolean,
    loading: Boolean,
    round: Boolean
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style lang="scss" scoped>
.uk-button {
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  margin: 0;
  outline: none;
  padding: 12px 20px;
  text-align: center;
  white-space: nowrap;

  &[disabled] {
    cursor: not-allowed;
  }
}
</style>
