<template>
  <section class="section-checkboxes" id="checkboxes">
    <h2 class="section-title">Checkboxes</h2>
    <uk-card title="Standard checkbox">
      <uk-checkbox>Primary</uk-checkbox>
    </uk-card>
  </section>
</template>
<script>
import UkCard from "@/components/Card";
import UkCheckbox from "@/components/Checkbox";
export default {
  components: {
    UkCard,
    UkCheckbox
  }
};
</script>
