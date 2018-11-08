<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :fill="color">
      <slot v-if="$slots.default" />
      <keep-alive v-else><component :is="component" /></keep-alive>
    </g>
  </svg>
</template>

<script>
export default {
  name: "IconBase",

  props: {
    color: {
      type: String,
      default: "currentColor"
    },
    height: {
      type: [Number, String],
      default: "1em"
    },
    name: {
      type: String,
      default: "Edit"
    },
    viewBox: {
      type: String,
      default: "0 0 48 48"
    },
    width: {
      type: [Number, String],
      default: "1em"
    }
  },

  data() {
    return {
      component: null
    };
  },

  computed: {
    loader: function() {
      if (!this.name) {
        return null;
      }

      let componentPath = "@/components/icons/Icon" + this.name.toPascalCase();
      return () => import(`${componentPath}`);
    }
  },

  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () => import("@/components/icons/IconEdit");
      });
  }
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  margin-bottom: -2px; /* yes, I'm that particular about formatting */
}
</style>
