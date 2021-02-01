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
  methods: {
    createClasses(obj, str = "") {
      if (!obj) {
        return [];
      }
      let array = [];
      if (obj.span) {
        array.push(`col-${str}${obj.span}`);
      }
      if (obj.offset) {
        array.push(`col-${str}${obj.offset}`);
      }
      return array;
    },
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc,createClasses } = this;
      return [
        ...createClasses({ span, offset }),
        ...createClasses(ipad, "ipad-"),
        ...createClasses(narrowPc, "narrow-pc-"),
        ...createClasses(pc, "pc-"),
        ...createClasses(widePc, "wide-pc-"),
      ];
      //   return [
      //     span && `col-${span}`,
      //     offset && `offset-${offset}`,
      //     ...(ipad ? [`col-ipad-${ipad.span}`] : []),
      //     ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
      //     ...(pc ? [`col-pc-${pc.span}`] : []),
      //     ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
      //   ];
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
  @media (min-width: 769px) and (max-width: 1200px) {
    $class-prefix-col: col-narrow-pc-;
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
  @media (min-width: 1201px) and (max-width: 1920px) {
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

  @media (min-width: 1921px) {
    $class-prefix-col: col-wide-pc-;
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
