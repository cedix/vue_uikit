<template>
  <g>
    <svg :viewBox="localViewBox">
      <path
        d="M6 34.5V42h7.5l22.13-22.13-7.5-7.5L6 34.5zm35.41-20.41c.78-.78.78-2.05 0-2.83l-4.67-4.67c-.78-.78-2.05-.78-2.83 0l-3.66 3.66 7.5 7.5 3.66-3.66z"
      />
    </svg>
  </g>
</template>
<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: "0 0 48 48"
    }
  },

  data() {
    return {
      localViewBox: this.viewBox
    };
  }
};
</script>
