<template>
  <div class="popover" @click="onClick" ref="popover">
    <div
      ref="contentWrapper"
      class="content-wrapper"
      v-if="visible"
      :class="[`position-${position}`]"
    >
      <slot name="content"></slot>
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
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].indexOf(value) >= 0;
      },
    },
  },
  methods: {
    positionPopover() {
      const { contentWrapper, triggerWrapper } = this.$refs;
      document.body.appendChild(contentWrapper);
      let { top, left, height, width } = triggerWrapper.getBoundingClientRect();
      console.log(height);
      if (this.position === "top") {
        contentWrapper.style.left = `${left + window.scrollX}px`;
        contentWrapper.style.top = `${top + window.scrollY}px`;
      } else if (this.position === "bottom") {
        contentWrapper.style.left = `${left + window.scrollX}px`;
        contentWrapper.style.top = `${top + height + window.scrollY}px`;
      } else if (this.position === "left") {
        contentWrapper.style.left = `${left + window.scrollX}px`;
        let { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top = `${top + window.scrollY + (height - height2) / 2}px`;
      } else if (this.position === "right") {
        contentWrapper.style.left = `${left + width + window.scrollX}px`;
        let { height: height2 } = contentWrapper.getBoundingClientRect();
        contentWrapper.style.top = `${top + window.scrollY + (height - height2) / 2}px`;
      }
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
  mounted() {},
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
    }
    &::before {
      border-bottom-color: $border-color;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: #ffffff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      top: 50%;
      transform: translateY(-50%);
    }
    &::before {
      border-left-color: $border-color;
      left: 100%;
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
