<template>
  <div class="et-nav" :class="{ vertical }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "EtNav",
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    mode: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  provide() {
    return {
      root: this,
      vertical: this.vertical,
    };
  },
  data() {
    return {
      items: [],
      namePath: [],
    };
  },
  methods: {
    addItem(vm) {
      this.items.push(vm);
    },
    updateChildren() {
      this.items.forEach((vm) => {
        vm.selected = this.selected.indexOf(vm.name) >= 0;
      });
    },
    listenToChildren() {
      this.items.forEach((vm) => {
        vm.$on("add:selected", (name) => {
          if (this.multiple) {
            if (this.selected.indexOf(name) < 0) {
              let copy = JSON.parse(JSON.stringify(this.selected));
              copy.push(name);
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    },
  },
  mounted() {
    this.updateChildren();
    this.listenToChildren();
  },
  computed: {
    vertical() {
      return this.mode === "vertical";
    },
  },
  updated() {
    this.updateChildren();
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-nav {
  display: flex;
  border-bottom: 1px solid $border-color;
  user-select: none;
  cursor: default;
  &.vertical {
    flex-direction: column;
    display: inline-flex;
    min-width: 100px;

    border-right: 1px solid $border-color;
    border-bottom: none;
  }
}
</style>
