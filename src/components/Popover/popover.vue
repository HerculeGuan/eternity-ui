<template>
  <div class="et-popover" ref="popover">
    <div
      ref="contentWrapper"
      class="et-popover-wrapper"
      v-if="visible"
      :class="[`position-${position}`, {'no-padding':noPadding}]"
    >
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" class="et-popover-span">
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
    noPadding: {
      type: Boolean,
      default: false,
    },
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
    container: {
      type: Object,
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
  beforeDestroy() {
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
      const {
        top,
        left,
        height,
        width,
      } = triggerWrapper.getBoundingClientRect();
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
        (this.$refs.popover === e.target ||
          this.$refs.popover.contains(e.target))
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
      this.$nextTick(() => {
        this.positionPopover();
        document.addEventListener("click", this.onClickDocument);
      });
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
@import "../var";

.et-popover {
  font-size: $font-size;
  display: inline-block;
  vertical-align: top;
  position: relative;
  .et-popover-span {
    display: inline-block;
  }
}
.et-popover-wrapper {
  font-size: $font-size;
  position: absolute;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  filter: drop-shadow(0 2px 12px rgba(0, 0, 0, 0.05));
  background: #ffffff;
  color: #000;
  padding: 0.5em 1em;
  &.no-padding {
    padding: 0;
  }
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    border: 6px solid transparent;
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
