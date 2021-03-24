<template>
  <div class="et-subnav">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="et-subnav-popover" v-show="open">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "EtSubnav",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    onClick() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-subnav {
  // font-size: $font-size;
  position: relative;
  cursor: pointer;

  > span {
    display: block;
    padding: 10px 20px;
  }
  &-popover {
    font-size: $font-size;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    white-space: nowrap;
    background: white;
    min-width: 100px;
    @extend .box-shadow;
  }
  .et-subnav {
    .et-subnav-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
  }
  .et-nav-item {
    &.selected {
      background-color: $grey-light;
    }
    &::after {
      display: none;
    }
  }
}
</style>
