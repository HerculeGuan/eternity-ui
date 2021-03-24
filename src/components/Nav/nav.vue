<template>
  <div class="et-nav">
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
  },
  provide() {
    return {
      root: this,
    };
  },
  data() {
    return {
      items: [],
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
  computed: {},
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
  cursor: default;
}
</style>
