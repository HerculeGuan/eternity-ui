<template>
  <!-- 递归组件 -->
  <div class="cascader-items" :style="{ height: height + 'px' }">
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="index"
        @click="leftSelected = item"
      >
        <span>{{ item.name }}</span>
        <et-icon name="right" v-if="item.children"></et-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <et-cascader-items :items="rightItems"> </et-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "../../../src/components/Icon/icon";
export default {
  name: "EtCascaderItems",
  props: {
    items: {
      type: Array
    },
    height: {
      type: [String, Number]
    }
  },
  data() {
    return {
      leftSelected: null
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        return this.leftSelected.children;
      } else {
        return null;
      }
    }
  },
  components: {
    "et-icon": Icon
  }
};
</script>
<style lang="scss" scoped>
@import "../var";

.cascader-items {
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    height: 100%;
    padding: 0.3em 0;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    display: flex;
    align-items: center;
    padding: 0.3em 1em;
    svg {
      margin-left: 0.2em;
    }
  }
}
</style>
