<template>
  <div class="et-carousel">
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
    };
  },
  methods: {
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    playAutomatically() {
      let index = this.names.indexOf(this.getSelected());
      let run = () => {
        setTimeout(() => {
          if (index === this.names.length) {
            index = 0;
          }
          this.select(index + 1);
          index++;
          run();
        }, 1000);
      };
      let runReverse = () => {
        setTimeout(() => {
          let newIndex = index - 1;
          if (newIndex === -1) {
            newIndex = this.names.length - 1;
          }
          if (newIndex === this.names.length) {
            newIndex = 0;
          }
          this.select(newIndex);
          run();
        }, 1000);
      };
      //   run();
    },
    updateChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true;
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
