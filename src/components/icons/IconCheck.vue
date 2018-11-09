<template>
  <g>
    <svg :viewBox="localViewBox">
      <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z"></path>
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
