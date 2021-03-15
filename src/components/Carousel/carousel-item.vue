<template>
  <transition name="carousel">
    <div class="et-carousel-item" v-if="visible">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "EtCarouselItem",
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      selected: undefined,
    };
  },
  computed: {
    visible() {
      return this.selected === this.name;
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-enter-active,
.carousel-leave-active {
  transition: all 1s;
}
.carousel-leave-active {
  position: absolute;
  top: 0;
  left: 0;
}
.carousel-enter {
  transform: translateX(100%);
}
.carousel-leave-to {
  transform: translateX(-100%);
}
</style>