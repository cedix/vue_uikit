<template>
  <section class="section-icons" id="icons">
    <h2 class="section-title">Icons</h2>
    <div class="icons-list">
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="add" size="2.5em" />
          <span class="icon-name">add</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="check" size="2.5em" />
          <span class="icon-name">check</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="cross" size="2.5em" />
          <span class="icon-name">cross</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="edit" size="2.5em" />
          <span class="icon-name">edit</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="img-not-found" size="2.5em" />
          <span class="icon-name">img-not-found</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="missing" size="2.5em" />
          <span class="icon-name">missing</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="search" size="2.5em" />
          <span class="icon-name">search</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="star-empty" size="2.5em" />
          <span class="icon-name">star-empty</span>
        </div>
      </uk-card>
      <uk-card height="100%" width="100%" bg-color="#eee">
        <div class="icon-block">
          <uk-icon class="icon-img" name="trash" size="2.5em" />
          <span class="icon-name">trash</span>
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
  display: flex;
  flex-flow: column nowrap;
  justify-items: center;
}

.icon-img {
  margin: auto;
  // margin-left: auto;
  // margin-right: auto;
}

.icon-name {
  font-size: 0.9em;
  margin-top: 10px;
  text-align: center;
}

.icons-list {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 10px;
  margin-top: 1em;
}

.section-icons {
  h2 {
    margin: 0;
  }
}
</style>
