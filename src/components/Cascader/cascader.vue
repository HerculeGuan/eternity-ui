<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in options">
        <et-cascader-item :optionsItem="item"></et-cascader-item>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from "./cascader-item";
export default {
  name: "EtCascader",
  props: {
    options: {
      type: Array,
    },
  },
  components: {
    "et-cascader-item": CascaderItem,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
</style>
