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
    justify: {
      type: String,
      validator(value) {
        // return ["left", "center", "right"].includes(value);
        return ["left", "center", "right"].indexOf(value) >= 0;
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
      let { justify } = this;
      return [justify && `justify-${justify}`];
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
  flex-wrap: wrap;
  &.justify-left {
    justify-content: flex-start;
  }
  &.justify-center {
    justify-content: center;
  }
  &.justify-right {
    justify-content: flex-end;
  }
}
</style>