<template>
  <section class="section-icons" id="icons">
    <h2 class="section-title">Icons</h2>
    <div class="icons-list">
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon name="test" width="3em" height="3em" />
        </div>
      </uk-card>
    </div>
  </section>
</template>

<script>
import UkCard from "@/components/Card";
import UkIcon from "@/components/Icon";

export default {
  name: "IconsDemo",

  components: {
    UkCard,
    UkIcon
  }
};
</script>

<style lang="scss" scoped>
.icon-block {
  margin-left: auto;
  margin-right: auto;
}
.icons-list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 1em;
}

.section-icons {
  h2 {
    margin: 0;
  }
}
</style>
