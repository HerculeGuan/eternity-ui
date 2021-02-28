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
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      open: false,
      accordion: false,
    };
  },
  methods: {
    toggle() {
      if (this.open) {
        this.close();
      } else {
        this.eventBus.$emit("update:selected", this.name);
      }
    },
    close() {
      this.open = false;
    },
    show() {
      this.open = true;
    },
  },
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name) => {
      if (name === this.name) {
        this.show();
      } else {
        if (this.accordion) {
          this.close();
        }
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
