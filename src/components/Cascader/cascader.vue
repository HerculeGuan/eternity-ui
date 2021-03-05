<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
      <et-cascader-items :items="options"></et-cascader-items>
    </div>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
export default {
  name: "EtCascader",
  props: {
    options: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisible: false,
    };
  },
  components: {
    "et-cascader-items": CascaderItems,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
  .trigger {
    border: 1px solid red;
    height: 32px;
    width: 200px;
  }
  .popover {
    border: 1px solid red;
    height: 150px;
    display: flex;
  }
}
</style>
