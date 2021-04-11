<template>
  <button
    class="et-button"
    :class="[`icon-${iconPosition}`, { [`bg-${type}`]: type }]"
    @click="$emit('click')"
  >
    <et-icon class="loading icon" v-if="loading" name="loading"></et-icon>
    <et-icon class="icon" v-if="icon && !loading" :name="icon"></et-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "../Icon/icon";
export default {
  name: "EtButton",
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      validator(value) {
        return ["primary", "success", "warning", "danger"].indexOf(value) >= 0;
      }
    }
  },
  components: {
    "et-icon": Icon
  }
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-button {
  font-size: $font-size;
  height: $height;
  padding: 0 0.8em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;

  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background: $button-active-bg;
  }
  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.2em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.2em;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
    margin-right: 0.2em;
  }
  &:disabled {
    cursor: not-allowed;
    border-color: $border-color;
  }
  $buttonType: primary, success, warning, danger;
  @each $c in $buttonType {
    &.bg-#{$c} {
      border: none;
      color: #fff;
      font-weight: 500;
      &:hover,
      &:disabled {
        opacity: 0.8;
      }
      > svg {
        fill: #fff;
      }
    }
  }
  &.bg-primary {
    background-color: $primary-color;
  }
  &.bg-success {
    background-color: $success-color;
  }
  &.bg-warning {
    background-color: $warning-color;
  }
  &.bg-danger {
    background-color: $danger-color;
  }
}
</style>
