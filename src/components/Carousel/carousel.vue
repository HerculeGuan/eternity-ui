<template>
  <div
    class="et-carousel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div class="et-carousel-window">
      <div class="et-carousel-wrapper">
        <slot />
      </div>
    </div>
    <div class="et-carousel-dots">
      <span
        v-for="n in childrenLength"
        :class="{ active: n - 1 === selectedIndex }"
        @click="select(n - 1)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "EtCarousel",
  props: {
    selected: {
      type: [String, Number],
    },
    autoPlay: {
      type: Boolean,
      defaulut: true,
    },
  },
  data() {
    return {
      childrenLength: 0,
      lastSelectedIndex: undefined,
      timerId: undefined,
      startTouch: undefined,
    };
  },
  methods: {
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    onMouseEnter() {
      this.pause();
    },
    onMouseLeave() {
      this.playAutomatically();
    },
    onTouchStart(e) {
      this.pause();
      if (e.touches.length > 1) {
        return;
      }
      this.startTouch = e.touches[0];
    },
    onTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;
      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let deltaY = Math.abs(y2 - y1);
      let rate = distance / deltaY;
      if (rate > 2) {
        if (x2 > x1) {
          this.select(this.selectedIndex - 1);
        } else {
          this.select(this.selectedIndex + 1);
        }
      }
      this.$nextTick(() => {
        this.playAutomatically();
      });
    },
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        this.timerId = setTimeout(() => {
          let newIndex = index - 1;
          this.select(newIndex);
          run();
        }, 1000);
      };
      run();
    },
    pause() {
      window.clearTimeout(this.timerId);
      this.timerId = undefined;
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        let reverse =
          this.selectedIndex > this.lastSelectedIndex ? false : true;
        if (
          this.lastSelectedIndex === this.childrenLength - 1 &&
          this.selectedIndex === 0
        ) {
          reverse = false;
        }
        if (
          this.lastSelectedIndex === 0 &&
          this.selectedIndex === this.childrenLength - 1
        ) {
          reverse = true;
        }
        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    },
    select(index) {
      if (index === -1) {
        index = this.names.length - 1;
      }
      if (index === this.names.length) {
        index = 0;
      }
      this.lastSelectedIndex = this.selectedIndex;

      this.$emit("update:selected", this.names[index]);
    },
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.getSelected()) || 0;
    },
    names() {
      return this.$children.map((vm) => vm.name);
    },
  },
  mounted() {
    this.updateChildren();
    this.playAutomatically();
    this.childrenLength = this.$children.length;
    this.lastSelectedIndex = this.selectedIndex;
  },
  updated() {
    this.updateChildren();
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-carousel {
  //   display: inline-block;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    > span {
      cursor: pointer;
      margin: 0.2em 0.5em;
      display: inline-flex;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      background-color: $grey;
      &.active {
        background-color: $primary-color;
        cursor: default;
      }
    }
  }
}
</style>
