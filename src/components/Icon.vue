<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="calcWidth"
    :height="calcHeight"
    :viewBox="localViewBox"
    :aria-labelledby="name"
    role="presentation"
  >
    <title :id="name" lang="en">{{ name }} icon</title>
    <g :fill="color">
      <slot v-if="$slots.default" />
      <keep-alive v-else>
        <component :is="component" :viewBox="localViewBox" />
      </keep-alive>
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
      type: [Number, String]
    },
    name: {
      type: String,
      default: "Edit"
    },
    size: {
      type: [Number, String],
      default: "1em"
    },
    viewBox: {
      type: String
    },
    width: {
      type: [Number, String]
    }
  },

  data() {
    return {
      component: null,
      localViewBox: this.viewBox
    };
  },

  computed: {
    calcHeight: function() {
      // Return given height
      if (this.height) {
        if (typeof this.height === "number") {
          return this.height + "em";
        } else {
          return this.height;
        }
      }

      // Return size
      if (typeof this.size === "number") {
        return this.size + "em";
      } else {
        return this.size;
      }
    },
    calcWidth: function() {
      // Return given width
      if (this.width) {
        if (typeof this.width === "number") {
          return this.width + "em";
        } else {
          return this.width;
        }
      }

      // Return size
      if (typeof this.size === "number") {
        return this.size + "em";
      } else {
        return this.size;
      }
    },
    loader: function() {
      if (!this.name) {
        return null;
      }

      let componentName = "Icon" + this.name.toPascalCase();
      let componentPath = "@/components/icons/" + componentName;
      // this.setComponentViewBox(componentName);
      return () => import(`${componentPath}`);
    }
  },

  // methods: {
  //   setComponentViewBox(name) {
  //     let vb = componentsViewBoxes.find(comp => comp.name === name);
  //     if (vb !== undefined) {
  //       this.localViewBox = vb.viewBox;
  //     } else {
  //       this.localViewBox = DEFAULT_VIEWBOX;
  //     }
  //   }
  // },

  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        let componentName = "IconImgNotFound";
        // this.setComponentViewBox(componentName);
        this.component = () => import("@/components/icons/" + componentName);
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
