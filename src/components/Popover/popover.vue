<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
  methods: {
    positionPopover() {
      document.body.appendChild(this.$refs.contentWrapper);
      let { top, left } = this.$refs.triggerWrapper.getBoundingClientRect();
      this.$refs.contentWrapper.style.left = `${left + window.scrollX}px`;
      this.$refs.contentWrapper.style.top = `${top + window.scrollY}px`;
    },
    listenToDocument() {
      let eventHandler = (e) => {
        if (this.$refs.popover && this.$refs.popover.contains(e.target)) {
          return;
        }
        this.visible = false;
        document.removeEventListener("click", eventHandler);
      };
      document.addEventListener("click", eventHandler);
    },
    onShow() {
      setTimeout(() => {
        this.positionPopover();
        this.listenToDocument();
      }, 0);
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        console.log(111);
        this.visible = !this.visible;
        if (this.visible === true) {
          this.onShow();
        }
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>
