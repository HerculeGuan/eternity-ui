<template>
  <!-- 递归组件 -->
  <div class="cascader-items" :style="{ height: height + 'px' }">
    <div class="left">
      <div
        class="label"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        <span>{{ item.name }}</span>
        <et-icon name="right" v-if="item.children"></et-icon>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <et-cascader-items
        :level="level + 1"
        :items="rightItems"
        :height="height"
        :selected="selected"
        @update:selected="onUpdateSelected"
      >
      </et-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "../../../src/components/Icon/icon";
export default {
  name: "EtCascaderItems",
  props: {
    items: {
      type: Array,
    },
    height: {
      type: [String, Number],
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      },
    },
    level: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  methods: {
    onClickLabel(item) {
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    },
  },
  computed: {
    rightItems() {
      let currentSelected = this.selected[this.level];
      if (currentSelected && currentSelected.children) {
        return currentSelected.children;
      } else {
        return null;
      }
    },
  },
  components: {
    "et-icon": Icon,
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "../var";

.cascader-items {
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
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 0.3em 1em;
    svg {
      margin-left: 0.2em;
    }
  }
}
</style>
