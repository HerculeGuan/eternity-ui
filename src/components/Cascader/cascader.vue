<template>
  <div class="et-cascader" ref="cascader">
    <et-popover position="bottom">
      <template v-slot:content>
        <et-cascader-items
          :items="options"
          :selected="selected"
          :height="popoverHeight"
          :load-data="loadData"
          :loading-item="loadingItem"
          @update:selected="onUpdateSelected"
        ></et-cascader-items>
      </template>
      <et-input v-model="result"></et-input>
    </et-popover>
  </div>
</template>

<script>
import CascaderItems from "./cascader-items";
import ClickOutside from "../../directive/click-outside";
import Popover from "../Popover/popover";
import Input from "../Input/input";

export default {
  name: "EtCascader",
  props: {
    options: {
      type: Array,
    },
    popoverHeight: {
      type: [String, Number],
      default: "200",
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
  directives: {
    clickOutside: ClickOutside,
  },
  data() {
    return {
      loadingItem: {},
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
        this.loadingItem = {};
        let copy = JSON.parse(JSON.stringify(this.options));
        let toUpdate = complex(copy, lastItem.id);
        toUpdate.children = result;
        this.$emit("update:options", copy);
      };
      if (!lastItem.isLeaf && this.loadData) {
        this.loadData && this.loadData(lastItem, updateSource);
        this.loadingItem = lastItem;
      }
    },
    onClickDocument(e) {
      if (
        e.target === this.$refs.cascader ||
        this.$refs.cascader.contains(e.target)
      ) {
        return;
      }
      this.close();
    },
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join(" / ");
    },
  },
  components: {
    "et-cascader-items": CascaderItems,
    "et-popover": Popover,
    "et-input": Input,
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.et-cascader {
  display: inline-block;
  font-size: $font-size;
  position: relative;
  .et-input {
    width: 200px;
  }
}
</style>
