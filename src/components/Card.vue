<template>
  <div class="uk-card uk-color-success" :class="classes" v-if="!closed">
    <div class="uk-card-header" v-if="hasTitle">
      <div class="uk-card-title">
        <h3>{{ title }}</h3>
        <!-- <div class="uk-close" @click.prevent="closeCard" v-if="isClosable">&times;</div> -->
        <close-button @close="closeCard" v-if="isClosable" />
      </div>
    </div>
    <div class="uk-card-content">
      <slot />
      <close-button class="uk-card-close" @close="closeCard" v-if="isClosable && !hasTitle" />
    </div>
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
      default: 1
    },
    rounded: {
      type: Boolean,
      required: false,
      default: true
    },
    square: {
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
      // if (this.square || this.square === true) {
      //   this.localRounded = false;
      // }

      // Rounded
      // if (this.localRounded === true) {
      //   this.classes.push("rounded");
      // }
    }
  },

  mounted() {
    this.setStyles();
  }

};
</script>

<style lang="scss">
@import "../assets/scss/base";
@import "../assets/scss/partials/shadows";

:root {
  --uk-card-bg-color: $gray-1;
  --uk-card-title-bg-color: $gray-2;
  --uk-card-padding: 1.4em;
}

.uk-card {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-row-gap: 0.5em;

  background-color: var(--uk-card-bg-color);
  position: relative;

  &.uk-color-success {
    --uk-card-bg-color: $color-success-bg;
    --uk-card-title-bg-color: $color-success-bg-accent;
  }

  .uk-card-close {
    float: right;
  }

  .uk-card-content {
    padding: var(--uk-card-padding);
  }

  .uk-card-header {
    background-color: var(--uk-card-title-bg-color);
  }

  .uk-card-title {
    $title-padding: calc(var(--uk-card-padding) * -1);

    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    padding: calc(var(--uk-card-padding) / 2) var(--uk-card-padding);

    h3 {
      font-weight: bold;
      padding: 0 !important;
    }
  }

}
</style>
