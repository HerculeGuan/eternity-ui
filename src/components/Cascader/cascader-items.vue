<template>
  <!-- 递归组件 -->
  <div class="cascader-items">
    <div class="left">
      <div class="label" v-for="item in items" @click="leftSelected = item">
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <et-cascader-items :items="rightItems"> </et-cascader-items>
    </div>
  </div>
</template>

<script>
export default {
  name: "EtCascaderItems",
  props: {
    items: {
      type: Array,
    },
  },
  data() {
    return {
      leftSelected: null,
    };
  },
  computed: {
    rightItems() {
      if (this.leftSelected && this.leftSelected.children) {
        console.log(this.leftSelected.children, "first");
        return this.leftSelected.children;
      } else {
        console.log("second");
        return null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cascader-items {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  .left {
    border: 1px solid red;
  }
  .right {
  }
}
</style>
