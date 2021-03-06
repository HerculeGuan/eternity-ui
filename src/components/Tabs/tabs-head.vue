<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper"><slot name="actions"></slot></div>
  </div>
</template>

<script>
export default {
  name: "EtTabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      let { width, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.left = `${left}px`;
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../var";

.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $primary-color;
    transition: all 450ms;
  }
  > .actions-wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 0 1em;
  }
}
</style>
