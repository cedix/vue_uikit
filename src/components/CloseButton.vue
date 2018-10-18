<template>
  <div>
    <div class="uk-close" @click.prevent="close">
      <svg xmlns="http://www.w3.org/2000/svg" 
          xmlns:xlink="http://www.w3.org/1999/xlink" style="isolation:isolate" viewBox="0 0 256 256">
        <g>
            <path d=" M 149.393 128 L 213.569 63.824 C 219.477 57.916 219.477 48.338 213.569 42.432 C 207.662 36.524 198.085 36.524 192.177 42.432 L 128 106.609 L 63.822 42.431 C 57.915 36.523 48.338 36.523 42.43 42.431 C 36.523 48.338 36.523 57.916 42.43 63.823 L 106.607 128 L 42.43 192.177 C 36.523 198.085 36.523 207.663 42.43 213.569 C 48.338 219.477 57.915 219.477 63.822 213.569 L 128 149.392 L 192.177 213.569 C 198.084 219.477 207.662 219.477 213.569 213.569 C 219.477 207.662 219.477 198.085 213.569 192.177 L 149.393 128 Z " fill-rule="evenodd" fill="rgb(0,0,0)"/>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "CloseButton",

  data() {
    return {
      closed: false
    };
  },

  methods: {
    close: function() {
      this.closed = true;
      this.$emit("close");
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/scss/base";

.uk-close {
  --uk-close-size: 1em;

  cursor: pointer;
  height: var(--uk-close-size);
  width: var(--uk-close-size);

  @include transition($scope: transform, $duration: 0.1s);

  &:active {
    @include scale-click;
  }

  &:hover {
    @include animation($name: rotate-hover, $duration: 0.2s);
  }
}
</style>
