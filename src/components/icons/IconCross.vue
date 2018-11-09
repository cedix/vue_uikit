<template>
  <g>
    <svg :viewBox="localViewBox">
      <path
        d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"
      ></path>
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
