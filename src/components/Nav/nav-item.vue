<template>
  <div class="et-nav-item" :class="{ selected, vertical }" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: "EtNavItem",
  inject: ["root", "vertical"],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      this.root.namePath = [];
      this.$parent.updateNamePath && this.$parent.updateNamePath();
      this.$emit("update:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.et-nav-item {
  padding: 10px 20px;
  cursor: pointer;
  position: relative;
  &:not(.vertical) {
    &.selected {
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        top: calc(100% -1px);
        bottom: 0;
        left: 0;
        border-bottom: 2px solid $primary-color;
      }
    }
  }
  &.vertical {
    &.selected {
      color: $primary-color;
      background-color: $grey-light;
    }
  }
}
</style>
