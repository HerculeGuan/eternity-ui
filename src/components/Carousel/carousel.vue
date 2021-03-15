<template>
  <div class="et-carousel">
    <div class="et-carousel-window">
      <div class="et-carousel-wrapper">
        <slot />
      </div>
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
  },
  data() {
    return {};
  },
  methods: {
    updateChildren() {
      let selected = this.selected || this.$children[0].name;
      this.$children.forEach((vm) => {
        vm.selected = selected;
      });
    },
  },
  mounted() {
    this.updateChildren();
  },
  updated() {
    this.updateChildren();
  },
};
</script>

<style lang="scss" scoped>
.et-carousel {
  display: inline-block;
  &-window {
  }
  &-wrapper {
    position: relative;
  }
}
</style>