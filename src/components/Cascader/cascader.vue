<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || "&nbsp;" }}
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
  computed: {
    result() {
      return this.selected.map((item) => item.name).join("/");
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
    border: 1px solid $border-color;
    font-size: inherit;
    height: $height;
    border-radius: $border-radius;
    padding: 0 8px;
    min-width: 160px;
    display: inline-flex;
    align-items: center;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    background-color: #fff;
    margin-top: 8px;
    @extend .box-shadow;
  }
}
</style>
