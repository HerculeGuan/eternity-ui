<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <et-cascader-items
        :items="options"
        class="popover"
        :height="popoverHeight"
      ></et-cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";

export default {
  name: "EtCascader",
  props: {
    options: {
      type: Array,
    },
    popoverHeight: {
      type: [String, Number],
      default: "100",
    },
  },
  data() {
    return {
      popoverVisible: false,
    };
  },
  components: {
    "et-cascader-items": CascaderItems,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
  position: relative;
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 200px;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid red;
    display: flex;
    background-color: #fff;
  }
}
</style>
