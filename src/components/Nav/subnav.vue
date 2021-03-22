<template>
  <div class="et-subnav">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="et-subnav-popover">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "EtSubnav",
};
</script>

<style lang="scss" scoped>
.et-subnav {
  padding: 10px 20px;
  position: relative;
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid blue;
    white-space: nowrap;
  }
}
</style>