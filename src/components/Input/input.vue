<template>
  <div class="input" :class="{ error }">
    <input
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      type="text"
    />
    <template v-if="error">
      <et-icon name="error" class="icon-error"></et-icon>
      <span class="error-msg">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from "../Icon/icon";
export default {
  name: "EtInput",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: [String, Number],
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
    "et-icon": Icon,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.input {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  &.error {
    > input {
      border-color: $red;
      &:hover {
        border-color: $error-red;
      }
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
      box-shadow: inset 0 1px 2px #fff;
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
