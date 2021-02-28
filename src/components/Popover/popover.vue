<template>
  <div class="popover" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="[`position-${position}`]"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" class="popover-span">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "EtPopover",
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    openEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseenter";
      }
    },
    closeEvent() {
      if (this.trigger === "click") {
        return "click";
      } else {
        return "mouseleave";
      }
    },
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].indexOf(value) >= 0;
      },
    },
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.close);
    }
  },
  destroyed() {
    if (this.trigger === "click") {
      this.$refs.popover.removeEventListener("click", this.onClick);
    } else {
      this.$refs.popover.removeEventListener("mouseenter", this.open);
      this.$refs.popover.removeEventListener("mouseleave", this.close);
    }
  },
  methods: {
    positionPopover() {
      // 表驱动编程
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      const { top, left, height, width } = triggerWrapper.getBoundingClientRect();
      const { height: height2 } = contentWrapper.getBoundingClientRect();
      let positions = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2,
        },
        right: {
          left: left + width + window.scrollX,
          top: top + window.scrollY + (height - height2) / 2,
        },
      };
      contentWrapper.style.left = positions[this.position].left + "px";
      contentWrapper.style.top = positions[this.position].top + "px";
    },
    onClickDocument(e) {
      if (
        this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) {
        return;
      }
      if (
        this.$refs.contentWrapper &&
        (this.$refs.contentWrapper === e.target ||
          this.$refs.contentWrapper.contains(e.target))
      ) {
        return;
      }
      this.close();
    },
    open() {
      this.visible = true;
      setTimeout(() => {
        this.positionPopover();
        document.addEventListener("click", this.onClickDocument);
      }, 0);
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === true) {
          this.close();
        } else {
          this.open();
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
  .popover-span {
    display: inline-block;
  }
}
.content-wrapper {
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
  background: #ffffff;
  padding: 0.5em 1em;
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    border: 10px solid transparent;
    display: block;
    width: 0px;
    height: 0px;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      left: 10px;
      border-bottom: none;
    }
    &::before {
      border-top-color: $border-color;
      top: calc(100% + 1px);
    }
    &::after {
      border-top-color: #ffffff;
      top: 100%;
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
      border-top: none;
    }
    &::before {
      border-bottom-color: $border-color;

      bottom: calc(100% + 1px);
    }
    &::after {
      border-bottom-color: #ffffff;

      bottom: 100%;
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-right: none;
    }
    &::before {
      border-left-color: $border-color;

      left: 100%;
    }
    &::after {
      border-left-color: #ffffff;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-left: none;
    }
    &::before {
      border-right-color: $border-color;

      right: calc(100% + 1px);
    }
    &::after {
      border-right-color: #ffffff;
      right: 100%;
    }
  }
}
</style>
