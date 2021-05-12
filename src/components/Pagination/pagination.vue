<template>
  <div class="et-pagination" v-if="!(hideOnSinglePage && total <= 1)">
    <span
      @click="onClickPage(currentPage - 1)"
      class="et-pagination-icon"
      :class="{ disabled: currentPage === 1 }"
    >
      <et-icon name="left" />
    </span>
    <span
      class="et-pagination-item"
      :class="{ active: page === currentPage }"
      v-for="page in pages"
      @click="onClickPage(page)"
      >{{ page }}</span
    >
    <span
      @click="onClickPage(currentPage + 1)"
      class="et-pagination-icon"
      :class="{ disabled: currentPage === total }"
    >
      <et-icon name="right" />
    </span>
  </div>
</template>

<script>
import Icon from "../Icon/icon";
export default {
  name: "EtPagination",
  components: {
    "et-icon": Icon,
  },
  props: {
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    pages() {
      let initPages = this.unique(
        [
          1,
          this.currentPage - 2,
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          this.currentPage + 2,
          this.total,
        ]
          .filter((n) => n >= 1 && n <= this.total)
          .sort((a, b) => a > b)
      );
      return initPages.reduce((prev, current, index) => {
        prev.push(current);
        initPages[index + 1] !== undefined &&
          initPages[index + 1] - initPages[index] > 1 &&
          prev.push("···");
        return prev;
      }, []);
    },
  },
  methods: {
    unique(array) {
      //   return [...new Set(array)];
      const object = {};
      array.map((number) => {
        object[number] = true;
      });
      return Object.keys(object).map((string) => parseInt(string));
    },
    onClickPage(page) {
      if (page >= 1 && page <= this.total) {
        this.$emit("update:currentPage", page);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-pagination {
  font-size: $font-size;
  user-select: none;
  display: flex;
  align-items: center;
  &-icon {
    font-size: 18px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    &:hover {
      fill: $primary-color;
    }
    &.disabled {
      fill: $disabled-color;
      cursor: not-allowed;
    }
  }
  &-item {
    border: 1px solid $grey;
    border-radius: $border-radius;
    padding: 4px 8px;
    margin: 0 4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 28px;
    font-weight: 500;
    cursor: pointer;
    &.active {
      color: #ffffff;
      background-color: $primary-color;
      border: 1px solid $primary-color;
    }
  }
}
</style>