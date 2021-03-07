<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <et-cascader-items
        class="popover"
        :items="options"
        :selected="selected"
        :height="popoverHeight"
        @update:selected="onUpdateSelected"
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
    selected: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      popoverVisible: false,
    };
  },
  methods: {
    // 单向数据流 从顶层更新所有数据
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    },
  },
  components: {
    "et-cascader-items": CascaderItems,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
  font-size: $font-size;
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
    display: flex;
    background-color: #fff;
    @extend .box-shadow;
  }
}
</style>
