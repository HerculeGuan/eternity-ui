<template>
  <div class="cascader-item">
    {{ optionsItem.name }}
    <et-cascader-item
      v-if="item.children"
      v-for="item in optionsItem.children"
      :optionsItem="item"
    >
    </et-cascader-item>
  </div>
</template>

<script>
export default {
  name: "EtCascaderItem",
  props: {
    optionsItem: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.cascader-item {
  border: 1px solid red;
  margin: 20px;
}
</style>
