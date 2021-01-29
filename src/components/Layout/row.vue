<template>
  <div
    class="row"
    :style="{ marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }"
  >
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
  },
  data() {
    return {
      gutter: 0,
    };
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
}
</style>