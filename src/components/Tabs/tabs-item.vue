<template>
  <div class="tabs-item" :class="classes" @click="clickItem" :data-name="name">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EtTabsItem",
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    classes() {
      return { active: this.active, disabled: this.disabled };
    },
  },
  created() {
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name) => {
        this.active = name === this.name;
      });
    }
  },
  methods: {
    clickItem() {
      if (this.disabled) {
        return;
      }
      this.eventBus && this.eventBus.$emit("update:selected", this.name, this);
      this.$emit("click", this);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.tabs-item {
  padding: 0 1em;
  flex-shrink: 0;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &.active {
    color: $blue;
  }
  &.disabled {
    color: $disabled-color;
  }
}
</style>