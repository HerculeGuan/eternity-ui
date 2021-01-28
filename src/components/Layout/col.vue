<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GCol",
  props: {
    span: {
      type: [Number, String],
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  background-color: yellow;
  width: 50%;
  border: 1px solid red;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
