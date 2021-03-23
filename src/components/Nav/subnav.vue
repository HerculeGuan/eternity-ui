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
.et-subnav {
  position: relative;
  > span {
    display: inline-block;
    padding: 10px 20px;
    vertical-align: top;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid blue;
    white-space: nowrap;
  }
}
</style>