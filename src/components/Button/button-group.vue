<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    // $el 指向当前组件的DOM元素 $children 属性只会寻找vue实例
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`g-button-group的子元素应该全是button,但你写的是${name}`);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.g-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      z-index: 1;
      position: relative;
    }
  }
}
</style>