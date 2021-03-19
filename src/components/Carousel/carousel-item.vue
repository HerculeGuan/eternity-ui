<template>
  <transition name="carousel">
    <div class="et-carousel-item" v-if="visible" :class="{ reverse }">
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
      reverse: false,
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
  transition: all 0.5s;
}
.carousel-leave-active {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.carousel-enter {
  opacity: 0;
  transform: translateX(100%) scale(0.5);
  &.reverse {
    transform: translateX(-100%) scale(0.5);
  }
}
.carousel-leave-to {
  opacity: 0;
  transform: scale(0.5);
  transform: translateX(-100%) scale(0.5);
  &.reverse {
    transform: translateX(100%) scale(0.5);
  }
}
</style>