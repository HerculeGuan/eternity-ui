<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EtButtonGroup",
  mounted() {
    // $el 指向当前组件的DOM元素 $children 属性只会寻找vue实例
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`et-button-group的子元素应该全是button,但你写的是${name}`);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
$border-radius: 4px;

.button-group {
  display: inline-flex;
  vertical-align: middle;
  > .button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }

    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      z-index: 1;
      position: relative;
    }
  }
}
</style>
