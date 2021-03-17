<template>
  <div
    class="et-carousel"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
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
        >{{ n - 1 }}</span
      >
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
    playAutomatically() {
      if (this.timerId) {
        return;
      }
      let run = () => {
        let index = this.names.indexOf(this.getSelected());
        this.timerId = setTimeout(() => {
          if (index === this.names.length) {
            index = 0;
          }
          this.select(index + 1);
          index++;
          run();
        }, 1000);
      };
      let runReverse = () => {
        let index = this.names.indexOf(this.getSelected());
        this.timerId = setTimeout(() => {
          let newIndex = index - 1;
          if (newIndex === -1) {
            newIndex = this.names.length - 1;
          }
          if (newIndex === this.names.length) {
            newIndex = 0;
          }
          this.select(newIndex);
          runReverse();
        }, 1000);
      };
      runReverse();
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
.et-carousel {
  //   display: inline-block;
  &-window {
    overflow: hidden;
  }
  &-wrapper {
    position: relative;
  }
  &-dots {
    > span {
      &.active {
        background-color: red;
      }
    }
  }
}
</style>
