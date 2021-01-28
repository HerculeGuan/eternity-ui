<template>
  <div class="g-input" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      type="text"
    />
    <template v-if="error">
      <g-icon name="error" class="icon-error"></g-icon>
      <span class="error-msg">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "../Icon/icon";
export default {
  name: "GInput",
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
    error: {
      type: String,
    },
  },
  data() {
    return {};
  },
  components: {
    "g-icon": Icon,
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
$red: #f1453d;
.g-input {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .error-msg {
    color: $red;
  }
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
    &[disabled],
    &[readonly] {
      border-color: $disabled-color;
      color: $disabled-color;
      cursor: not-allowed;
    }
    border-radius: $border-radius;
    padding: 0 8px;
  }
}
</style>