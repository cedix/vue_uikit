<template>
  <button 
    type="button"
    class="uk-button"
    @click="handleClick"
    :autofocus="autofocus"
    :disabled="disabled"
    :style="cssProps"
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
    round: {
      type: Boolean,
      required: false,
      default: true
    }
  },

  computed: {
    cssProps() { 
      return {
        '--uk-button-border-radius': ( this.round === true ? 'var(--border-radius-round)' : '0' )
      }
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/base";

:root {
  --uk-button-bg-color: transparent;
  --uk-button-border: 2px solid;
  --uk-button-border-color: $color-primary;
  --uk-button-border-radius: 0;
  --uk-button-padding: 10px 15px;
  --uk-button-text-color: $color-primary;
}

.uk-button {

  border: var(--uk-button-border);
  border-color: var(--uk-button-border-color);
  border-radius: var(--uk-button-border-radius);
  color: var(--uk-button-text-color);
  cursor: pointer;
  outline: none;
  padding: var(--uk-button-padding);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &.uk-color-info {
    --uk-button-border-color: $color-info;
    --uk-button-text-color: $color-info;
  }

  &.uk-color-error {
    --uk-button-border-color: $color-error;
    --uk-button-text-color: $color-error;
  }

  &.uk-color-primary {
    --uk-button-border-color: $color-primary;
    --uk-button-text-color: $color-primary;
  }

  &.uk-color-secondary {
    --uk-button-border-color: $color-secondary;
    --uk-button-text-color: $color-secondary;
  }

  &.uk-color-success {
    --uk-button-border-color: $color-success;
    --uk-button-text-color: $color-success;
  }

  &.uk-color-warning {
    --uk-button-border-color: $color-warning;
    --uk-button-text-color: $color-warning;
  }

  &:disabled,
  &[disabled] {
    --uk-button-bg-color: $gray-2;
    --uk-button-border-color: $color-primary-light;
    --uk-button-text-color: $color-primary-light;

    cursor: not-allowed;

    &.uk-color-info {
      --uk-button-border-color: $color-info-light;
      --uk-button-text-color: $color-info-light;
    }

    &.uk-color-error {
      --uk-button-border-color: $color-error-light;
      --uk-button-text-color: $color-error-light;
    }

    &.uk-color-primary {
      --uk-button-border-color: $color-primary-light;
      --uk-button-text-color: $color-primary-light;
    }

    &.uk-color-secondary {
      --uk-button-border-color: $color-secondary-light;
      --uk-button-text-color: $color-secondary-light;
    }

    &.uk-color-success {
      --uk-button-border-color: $color-success-light;
      --uk-button-text-color: $color-success-light;
    }

    &.uk-color-warning {
      --uk-button-border-color: $color-warning-light;
      --uk-button-text-color: $color-warning-light;
    }
  }

  // Hover
  @include shutter-out-horizontal($primaryColor: var(--uk-button-bg-color), $activeColor: var(--uk-button-border-color));

}

</style>
