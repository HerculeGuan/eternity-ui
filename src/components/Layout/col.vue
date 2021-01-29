<template>
  <div
    class="col"
    :class="[span && `col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
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
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.col {
  height: 100px;
  background-color: yellow;
  width: 50%;
  outline: 1px solid red;

  $class-prefix-col: col-;
  $class-prefix-offset: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix-col}#{$n} {
      width: ($n / 24) * 100%;
    }
    &.#{$class-prefix-offset}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
}
</style>
