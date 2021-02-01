<template>
  <button
    class="button"
    :class="[`icon-${iconPosition}`]"
    @click="$emit('click')"
  >
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import Icon from "../Icon/icon";
export default {
  name: "GButton",
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    "g-icon": Icon,
  },
};
</script>

<style lang="scss" scoped>
@keyframes circle {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.8em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  &:hover {
    border-color: var(--border-color-hover);
  }
  &:active {
    background: var(--button-active-bg);
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
    animation: circle 1s infinite linear;
    margin-right: 0.2em;
  }
}
</style>
