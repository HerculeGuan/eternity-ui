<template>
  <div class="g-input">
    <input :value="value" :disabled="disabled" :readonly="readonly" type="text" />
  </div>
</template>

<script>
export default {
  name: "G-input",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$disabled-color: #aaa;
.g-input {
  font-size: $font-size;
  display: inline-block;
  > input {
    height: 32px;
    border: 1px solid $border-color;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 2px $box-shadow-color;
      outline: none;
    }
    &[disabled],&[readonly] {
      border-color: $disabled-color;
      color: $disabled-color;
      cursor: not-allowed;
    }
    border-radius: $border-radius;
    padding: 0 8px;
  }
}
</style>