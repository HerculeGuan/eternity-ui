<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GRow",
  props: {
    gutter: {
      type: [Number, String],
    },
    site: {
      type: String,
      validator(value) {
        return ["left", "center", "right"].includes(value);
      },
    },
  },
  computed: {
    rowStyle() {
      let { gutter } = this;
      return {
        marginLeft: -gutter / 2 + "px",
        marginRight: -gutter / 2 + "px",
      };
    },
    rowClass() {
      let { site } = this;
      return [site && `site-${site}`];
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },
};
</script>

<style scoped lang="scss">
.row {
  display: flex;
  &.site-left {
    justify-content: flex-start;
  }
  &.site-center {
    justify-content: center;
  }
  &.site-right {
    justify-content: flex-end;
  }
}
</style>