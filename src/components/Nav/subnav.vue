<template>
  <div class="et-subnav" :class="{ active }" v-click-outside="close">
    <span @click="onClick" class="et-subnav-label">
      <slot name="title"></slot>
      <span class="et-subnav-icon" :class="{ open }">
        <et-icon name="right"></et-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition
        @enter="enter"
        @leave="leave"
        @after-leave="afterLeave"
        @after-enter="afterEnter"
      >
        <div class="et-subnav-popover" v-show="open" :class="{ vertical }">
          <slot />
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="et-subnav-popover" v-show="open">
        <slot />
      </div>
    </template>
  </div>
</template>

<script>
import ClickOutside from "../../directive/click-outside";
import Icon from "../Icon/icon";
export default {
  name: "EtSubnav",
  inject: ["root", "vertical"],
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
    enter(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = "0px";
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = "0px";
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
  },
  components: {
    "et-icon": Icon,
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
  &-label {
    padding: 10px 20px;
    display: flex;
    align-items: center;
    .et-subnav-icon {
      display: none;
    }
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
    transition: height 0.25s;

    @extend .box-shadow;
    .et-subnav-icon {
      display: inline-flex;
      transition: transform 0.25s;
      &.open {
        transform: rotate(180deg);
      }
      > .et-icon {
        margin: 0 0.5em;
      }
    }
    &.vertical {
      position: static;
      border: none;
      box-shadow: none;
      overflow: hidden;
    }
  }
  .et-subnav {
    &.active {
      position: relative;
      &::after {
        display: none;
      }
    }
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
