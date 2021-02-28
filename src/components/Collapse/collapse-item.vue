<template>
  <div class="collapse-item">
    <div class="title" @click="toggle">{{ title }}</div>
    <div class="content" v-if="open"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "EtCollapseItem",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
        this.eventBus && this.eventBus.$emit("updated:selected", this);
      }
    },
    close() {
      this.open = false;
    },
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus &&
      this.eventBus.$on("updated:selected", (vm) => {
        if (vm !== this) {
          this.close();
        }
      });
  },
};
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse-item {
  > .title {
    border: 1px solid $grey;
    margin: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>
