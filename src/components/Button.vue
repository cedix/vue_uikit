<template>
  <button
    class="uk-button"
    @click="handleClick"
    :autofocus="autofocus"
    :disabled="disabled"
    :type="nativeType"
    :class="[
      type ? 'uk-button-' + type : '',
      color ? 'uk-color-' + color : '',
      'uk-shadow-' + elevation
    ]"
  >
    <uk-icon :name="icon" size="2.1em" v-if="icon" />
    <span><slot v-if="$slots.default && !icon"/></span>
  </button>
</template>
<script>
import UkIcon from "@/components/Icon";

export default {
  name: "Button",

  components: {
    UkIcon
  },

  props: {
    autofocus: Boolean,
    circle: Boolean,
    color: {
      type: String,
      required: false,
      default: "primary"
    },
    disabled: Boolean,
    elevation: {
      type: [Number, String],
      default: 0
    },
    icon: String,
    loading: Boolean,
    nativeType: {
      type: String,
      required: false,
      default: "button"
    },
    type: {
      type: String,
      required: false,
      default: "round"
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
  background-color: var(--uk-button-bg-color);
  border: var(--uk-button-border) var(--uk-button-border-color);
  border-radius: var(--uk-button-border-radius);
  color: var(--uk-button-text-color);
  cursor: pointer;
  outline: none;
  padding: var(--uk-button-padding);
  text-align: center;
  text-decoration: none;
  white-space: nowrap;

  &.uk-button-circle {
    --uk-button-border: none;
    // --uk-button-border: 0px solid;
    --uk-button-border-radius: 50%;
    --uk-button-circle-size: 50px;
    --uk-button-padding: 0;
    --uk-button-text-color: $white;

    // max-height: var(--uk-button-circle-size);
    // min-height: var(--uk-button-circle-size);
    // max-width: var(--uk-button-circle-size);
    // min-width: var(--uk-button-circle-size);

    display: block;

    height: var(--uk-button-circle-size);
    width: var(--uk-button-circle-size);

    // Color Modifiers
    &.uk-color-info {
      --uk-button-bg-color: $color-info;

      &:hover {
        --uk-button-bg-color: $color-info-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-info-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-error {
      --uk-button-bg-color: $color-error;

      &:hover {
        --uk-button-bg-color: $color-error-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-error-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-primary {
      --uk-button-bg-color: $color-primary;

      &:hover {
        --uk-button-bg-color: $color-primary-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-primary-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-secondary {
      --uk-button-bg-color: $color-secondary;

      &:hover {
        --uk-button-bg-color: $color-secondary-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-secondary-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-success {
      --uk-button-bg-color: $color-success;

      &:hover {
        --uk-button-bg-color: $color-success-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-success-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-warning {
      --uk-button-bg-color: $color-warning;

      &:hover {
        --uk-button-bg-color: $color-warning-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-warning-light;
        --uk-button-text-color: $white;
      }
    }
  }

  &.uk-button-plain {
    --uk-button-border: 0px solid;
    --uk-button-border-radius: var(--border-radius-std);
    --uk-button-text-color: $white;

    // Color Modifiers
    &.uk-color-info {
      --uk-button-bg-color: $color-info;

      &:hover {
        --uk-button-bg-color: $color-info-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-info-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-error {
      --uk-button-bg-color: $color-error;

      &:hover {
        --uk-button-bg-color: $color-error-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-error-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-primary {
      --uk-button-bg-color: $color-primary;

      &:hover {
        --uk-button-bg-color: $color-primary-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-primary-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-secondary {
      --uk-button-bg-color: $color-secondary;

      &:hover {
        --uk-button-bg-color: $color-secondary-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-secondary-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-success {
      --uk-button-bg-color: $color-success;

      &:hover {
        --uk-button-bg-color: $color-success-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-success-light;
        --uk-button-text-color: $white;
      }
    }
    &.uk-color-warning {
      --uk-button-bg-color: $color-warning;

      &:hover {
        --uk-button-bg-color: $color-warning-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $color-warning-light;
        --uk-button-text-color: $white;
      }
    }
  }

  &.uk-button-round {
    // --uk-button-bg-color: $white;
    --uk-button-border-radius: var(--border-radius-round);

    box-shadow: none !important;

    // Hover
    @include shutter-out-horizontal(
      $primaryColor: var(--uk-button-bg-color),
      $activeColor: var(--uk-button-border-color)
    );

    // Color Modifiers
    &.uk-color-info {
      --uk-button-border-color: $color-info;
      --uk-button-text-color: $color-info;

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $gray-2;
        --uk-button-border-color: $color-info-light;
        --uk-button-text-color: $color-info-light;
      }
    }
    &.uk-color-error {
      --uk-button-border-color: $color-error;
      --uk-button-text-color: $color-error;

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $gray-2;
        --uk-button-border-color: $color-error-light;
        --uk-button-text-color: $color-error-light;
      }
    }
    &.uk-color-primary {
      --uk-button-border-color: $color-primary;
      --uk-button-text-color: $color-primary;

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $gray-2;
        --uk-button-border-color: $color-primary-light;
        --uk-button-text-color: $color-primary-light;
      }
    }
    &.uk-color-secondary {
      --uk-button-border-color: $color-secondary;
      --uk-button-text-color: $color-secondary;

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $gray-2;
        --uk-button-border-color: $color-secondary-light;
        --uk-button-text-color: $color-secondary-light;
      }
    }
    &.uk-color-success {
      --uk-button-border-color: $color-success;
      --uk-button-text-color: $color-success;

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $gray-2;
        --uk-button-border-color: $color-success-light;
        --uk-button-text-color: $color-success-light;
      }
    }
    &.uk-color-warning {
      --uk-button-border-color: $color-warning;
      --uk-button-text-color: $color-warning;

      &:disabled,
      &[disabled] {
        --uk-button-bg-color: $gray-2;
        --uk-button-border-color: $color-warning-light;
        --uk-button-text-color: $color-warning-light;
      }
    }
  }

  &.uk-button-text {
    --uk-button-bg-color: transparent;
    --uk-button-border: 0px solid;
    --uk-button-border-radius: 0;

    box-shadow: none !important;

    &:hover {
      --uk-button-border-radius: var(--border-radius-std);
    }

    // Color Modifiers
    &.uk-color-info {
      --uk-button-text-color: $color-info;

      &:hover {
        --uk-button-bg-color: $color-info-bg;
        // --uk-button-text-color: $color-info-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-text-color: $color-info-bg-accent;
      }
    }
    &.uk-color-error {
      --uk-button-text-color: $color-error;

      &:hover {
        --uk-button-bg-color: $color-error-bg;
        // --uk-button-text-color: $color-error-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-text-color: $color-error-bg-accent;
      }
    }
    &.uk-color-primary {
      --uk-button-text-color: $color-primary;

      &:hover {
        --uk-button-bg-color: $color-primary-bg;
        // --uk-button-text-color: $color-primary-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-text-color: $color-primary-bg-accent;
      }
    }
    &.uk-color-secondary {
      --uk-button-text-color: $color-secondary;

      &:hover {
        --uk-button-bg-color: $color-secondary-bg;
        // --uk-button-text-color: $color-secondary-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-text-color: $color-secondary-bg-accent;
      }
    }
    &.uk-color-success {
      --uk-button-text-color: $color-success;

      &:hover {
        --uk-button-bg-color: $color-success-bg;
        // --uk-button-text-color: $color-success-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-text-color: $color-success-bg-accent;
      }
    }
    &.uk-color-warning {
      --uk-button-text-color: $color-warning;

      &:hover {
        --uk-button-bg-color: $color-warning-bg;
        // --uk-button-text-color: $color-warning-light;
      }

      &:disabled,
      &[disabled] {
        --uk-button-text-color: $color-warning-bg-accent;
      }
    }

    &:disabled,
    &[disabled] {
      --uk-button-bg-color: transparent !important;
    }
  }

  &:disabled,
  &[disabled] {
    --uk-button-bg-color: transparent;
    cursor: not-allowed;
  }
}
</style>
