<template>
  <g>
    <svg :viewBox="localViewBox">
      <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" />
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
