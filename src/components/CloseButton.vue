<template>
  <div>
    <div class="uk-close" @click.prevent="close">&times;</div>
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
.uk-close {
  cursor: pointer;
  font-size: 1em;
}
</style>
