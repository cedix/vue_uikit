<template>
  <g>
    <svg :viewBox="localViewBox">
      <path
        d="M30 16c4.411 0 8-3.589 8-8s-3.589-8-8-8-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"
      ></path>
      <path
        d="M30 44c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"
      ></path>
      <path
        d="M30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"
      ></path>
    </svg>
  </g>
</template>
<script>
export default {
  props: {
    viewBox: {
      type: String,
      default: "0 0 60 60"
    }
  },

  data() {
    return {
      localViewBox: this.viewBox
    };
  }
};
</script>
