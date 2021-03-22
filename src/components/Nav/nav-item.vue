<template>
  <div class="et-nav-item" :class="{ selected }" @click="onClick">
    <slot />
  </div>
</template>

<script>
export default {
  name: "EtNavItem",
  inject: ["root"],
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  created() {
    this.root.addItem(this);
  },
  methods: {
    onClick() {
      this.$emit("add:selected", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.et-nav-item {
  padding: 10px 20px;
  &.selected {
    background-color: red;
  }
}
</style>