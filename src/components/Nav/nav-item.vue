<template>
  <div class="et-nav-item" :class="{ selected }" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: "EtNavItem",
  inject: ["root"],
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
      this.$emit("add:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.et-nav-item {
  padding: 10px 20px;
  position: relative;
  cursor: pointer;

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
</style>
