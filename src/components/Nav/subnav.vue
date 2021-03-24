<template>
  <div class="et-subnav" :class="{ active }" v-click-outside="close">
    <span @click="onClick">
      <slot name="title"></slot>
    </span>
    <div class="et-subnav-popover" v-show="open">
      <slot />
    </div>
  </div>
</template>

<script>
import ClickOutside from "../../directive/click-outside";
export default {
  name: "EtSubnav",
  inject: ["root"],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  directives: {
    clickOutside: ClickOutside,
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0;
    },
  },
  methods: {
    onClick() {
      this.open = !this.open;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      }
    },
    close() {
      this.open = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-subnav {
  position: relative;
  cursor: pointer;
  &.active {
    position: relative;
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
