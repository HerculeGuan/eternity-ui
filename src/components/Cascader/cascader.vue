<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      {{ result || "&nbsp;" }}
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <et-cascader-items
        class="popover"
        :items="options"
        :selected="selected"
        :height="popoverHeight"
        :loadData="loadData"
        @update:selected="onUpdateSelected"
      ></et-cascader-items>
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
    popoverHeight: {
      type: [String, Number],
      default: "100",
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      },
    },
    loadData: {
      type: Function,
    },
  },
  data() {
    return {
      popoverVisible: false,
    };
  },
  methods: {
    // 单向数据流 从顶层更新所有数据
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
      let lastItem = newSelected[newSelected.length - 1];
      let simple = (children, id) => {
        return children.filter((item) => item.id === id)[0];
      };
      let complex = (children, id) => {
        let noChildren = [];
        let hasChildren = [];
        children.forEach((child) => {
          if (child.children) {
            hasChildren.push(child);
          } else {
            noChildren.push(child);
          }
        });

        let found = simple(noChildren, id);
        if (found) {
          return found;
        } else {
          found = simple(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };

      let updateSource = (result) => {
        let copy = JSON.parse(JSON.stringify(this.options));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        this.$emit("update:options", copy);
      };
      if (!lastItem.isLeaf) {
        this.loadData && this.loadData(lastItem, updateSource);
      }
    },
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join("/");
    },
  },
  components: {
    "et-cascader-items": CascaderItems,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.cascader {
  font-size: $font-size;
  position: relative;
  .trigger {
    border: 1px solid $border-color;
    font-size: inherit;
    height: $height;
    border-radius: $border-radius;
    padding: 0 8px;
    min-width: 160px;
    display: inline-flex;
    align-items: center;
  }
  .popover-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    display: flex;
    background-color: #fff;
    margin-top: 8px;
    @extend .box-shadow;
  }
}
</style>
