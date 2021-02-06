<template>
  <div class="tabs"><slot></slot></div>
</template>

<script>
import Vue from "Vue";
export default {
  name: "EnTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  created() {
    // console.log(this);
    // console.log(this.eventBus);
    // this.$emit("update:selected");
  },
};
</script>

<style lang="scss" scoped>
.tabs {
}
</style>