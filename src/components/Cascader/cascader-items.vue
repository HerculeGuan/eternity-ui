<template>
  <!-- 递归组件 -->
  <div class="cascader-items" :style="{ height: height + 'px' }">
    <div class="left">
      <div
        class="label"
        :class="{
          active: item.name === (selected[level] && selected[level].name),
        }"
        v-for="(item, index) in items"
        :key="index"
        @click="onClickLabel(item)"
      >
        <span>{{ item.name }}</span>
        <span class="icons">
          <template v-if="loadingItem.name === item.name">
            <et-icon class="loading" name="loading"></et-icon
          ></template>
          <template v-else>
            <et-icon name="right" v-if="rightArrowVisible(item)"></et-icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <et-cascader-items
        :level="level + 1"
        :items="rightItems"
        :height="height"
        :selected="selected"
        :load-data="loadData"
        :loading-item="loadingItem"
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
    loadData: {
      type: Function,
    },
    loadingItem: {
      type: Object,
      default: () => ({}),
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
    rightArrowVisible(item) {
      return this.loadData ? !item.isLeaf : item.children;
    },
  },
  computed: {
    rightItems() {
      if (this.selected && this.selected[this.level]) {
        let select = this.items.filter(
          (item) => item.name === this.selected[this.level].name
        )[0];
        if (select && select.children && select.children.length > 0) {
          return select.children;
        }
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
    min-width: 120px;
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 0.5em 1em 0.5em 1.5em;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;
    &.active {
      background-color: $grey-light;
      color: $primary-color;
      font-weight: bold;
      fill: $primary-color;
    }
    .icons {
      display: flex;
      align-items: center;
      svg {
        margin-left: 0.2em;
      }
      .loading {
        animation: spin 1s infinite linear;
      }
    }
    &:hover {
      background-color: $grey-light;
    }
  }
}
</style>
