<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
let validator = (value) => {
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((key) => {
    if (!["span", "offset"].includes(key)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "GCol",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
    phone: {
      type: Object,
      validator,
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widePc: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colClass() {
      let { span, offset, phone, ipad, narrowPc, pc, widePc } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(phone && [`col-phone-${phone.span}`]),
        ...(ipad && [`col-ipad-${ipad.span}`]),
        ...(narrowPc && [`col-narrowPc-${narrowPc.span}`]),
        ...(pc && [`col-pc-${pc.span}`]),
        ...(widePc && [`col-widePc-${widePc.span}`]),
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.col {
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
  @media (max-width: 576px) {
    $class-prefix-col: col-phone-;
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
  @media (min-width: 577px) and (max-width: 768px) {
    $class-prefix-col: col-ipad-;
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
  @media (min-width: 769px) and (max-width: 992px) {
    $class-prefix-col: col-narrowPc-;
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
  @media (min-width: 993px) and (max-width: 1200px) {
    $class-prefix-col: col-pc-;
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
  @media (min-width: 1201px) {
    $class-prefix-col: col-widePc-;
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
}
</style>
