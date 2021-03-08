<template>
  <div class="tabs"><slot></slot></div>
</template>

<script>
import Vue from "vue";
export default {
  name: "EtTabs",
  props: {
    selected: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn("tabs的子组件应该是tabs-head和tabs-body,但你没有子组件");
        // throw new Error("tabs的子组件应该是tabs-head和tabs-body,但你没有子组件");
      }
    },
    selectTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "EtTabsHead") {
          vm.$children.forEach((childVm) => {
            if (
              childVm.$options.name === "EtTabsItem" &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    },
    emitTab() {
      this.eventBus.$on("update:selected", (name, vm) => {
        this.$emit("tab-click", name, vm);
      });
    },
  },
  mounted() {
    this.checkChildren();
    this.selectTab();
    this.emitTab();
  },
};
</script>

<style lang="scss" scoped>
// .tabs {
// }
</style>
