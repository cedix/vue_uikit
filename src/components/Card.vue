<template>
  <div class="uk-card" :class="classes" v-if="!closed">
    <div class="uk-card-header" v-if="hasTitle">
      <slot name="header">
        <div class="uk-card-title">
          <h3>{{ title }}</h3>
          <close-button class="uk-card-close" @close="closeCard" v-if="isClosable" />
        </div>
      </slot>
    </div>
    <div class="uk-card-content">
      <slot />
      <close-button class="uk-card-close" @close="closeCard" v-if="isClosable && !hasTitle" />
    </div>
    <slot name="footer" class="uk-card-footer" />
  </div>
</template>

<script>

import CloseButton from "./CloseButton";

export default {

  name: "Card",

  props: {
    bgColor: {
      type: String,
      required: false
    },
    closable: {
      type: Boolean,
      required: false,
      default: false
    },
    elevation: {
      type: Number,
      required: false,
      default: 2
    },
    rounded: {
      type: Boolean,
      required: false,
      default: false
    },
    textColor: {
      type: String,
      required: false,
      default: "#333"
    },
    title: {
      type: String,
      required: false
    }
  },

  components: {
    CloseButton
  },

  data() {
    return {
      classes: [],
      closed: false,
      localRounded: this.rounded
    };
  },

  computed: {
    isClosable: function() {
      if (this.closable && this.closable === true) {
        return true;
      } else {
        return false;
      }
    },
    hasFooter: function() {
      return this.$slots.footer;
    },
    hasTitle: function() {
      if (this.title && this.title !== "") {
        return true;
      } else {
        return false;
      }
    }
  },

  methods: {
    closeCard: function() {
      this.closed = true;
      this.$emit("close");
    },
    setStyles: function() {
      let component = this.$el;

      // Background
      component.style.backgroundColor = this.bgColor;

      // Text color
      component.style.color = this.textColor;

      // Elevation
      this.classes.push("uk-shadow-" + this.elevation);

      // Square
      // - set before rounded because it will override its value
      if (this.square || this.square === true) {
        this.localRounded = false;
      }

      // Rounded
      if (this.localRounded === true) {
        this.classes.push("uk-card-rounded");
      }
    }
  },

  mounted() {
    this.setStyles();
  }

};
</script>

<style lang="scss">
@import "../assets/scss/base";

:root {
  --uk-card-bg-color: $gray-1;
  --uk-card-border-radius: 0;
  --uk-card-header-height: 3em;
  --uk-card-title-bg-color: $gray-3;
  --uk-card-padding: 1.4em;
}

.uk-card {
  border-radius: var(--uk-card-border-radius);
  clear: both;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: var(--uk-card-header-height) auto auto;
  grid-row-gap: 0.5em;

  background-color: var(--uk-card-bg-color);
  position: relative;

  h1, h2, h3, h4, h5, h6, p {
    @include reset;
  }

  p{
    margin-bottom: calc( var(--uk-card-padding) * 0.5 );

    &:last-child {
      margin-bottom: 0;
    }
  }

  .uk-card-close {
    align-self: center;
    float: right;
  }

  .uk-card-content {
    padding: var(--uk-card-padding);
  }

  .uk-card-header {
    background-color: var(--uk-card-title-bg-color);
    border-radius: var(--uk-card-border-radius) var(--uk-card-border-radius) 0 0;
  }

  .uk-card-title {
    $title-padding: calc(var(--uk-card-padding) * -1);

    display: flex;
    flex-flow: row wrap;
    height: 100%;
    justify-content: space-between;
    padding: calc(var(--uk-card-padding) / 2) var(--uk-card-padding);

    h3 {
      align-self: center;
      font-weight: bold;
      padding: 0 !important;
    }
  }

  // ---------------------------------------------------
  // Card modifiers
  // ---------------------------------------------------

  &.uk-card-rounded {

    --uk-card-border-radius: var(--border-radius-std);

  }


  // ---------------------------------------------------
  // Color modifiers
  // ---------------------------------------------------

  &.uk-color-info {
    --uk-card-bg-color: $color-info-bg;
    --uk-card-title-bg-color: $color-info-bg-accent;
  }

  &.uk-color-error {
    --uk-card-bg-color: $color-error-bg;
    --uk-card-title-bg-color: $color-error-bg-accent;
  }

  &.uk-color-primary {
    --uk-card-bg-color: $color-primary-bg;
    --uk-card-title-bg-color: $color-primary-bg-accent;
  }

  &.uk-color-secondary {
    --uk-card-bg-color: $color-secondary-bg;
    --uk-card-title-bg-color: $color-secondary-bg-accent;
  }

  &.uk-color-success {
    --uk-card-bg-color: $color-success-bg;
    --uk-card-title-bg-color: $color-success-bg-accent;
  }

  &.uk-color-warning {
    --uk-card-bg-color: $color-warning-bg;
    --uk-card-title-bg-color: $color-warning-bg-accent;
  }

}
</style>
