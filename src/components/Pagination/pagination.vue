<template>
  <div class="et-pagination">
    <et-icon
      @click="onClickPrev"
      name="left"
      class="et-pagination-icon"
      :class="{ disabled: currentPage === 1 }"
    />
    <span
      class="et-pagination-item"
      :class="{ active: page === currentPage }"
      v-for="page in pages"
      @click="change(page)"
      >{{ page }}</span
    >
    <et-icon
      @click="onClickNext"
      name="right"
      class="et-pagination-icon"
      :class="{ disabled: currentPage === total }"
    />
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
      default: true,
    },
  },
  data() {
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
    let pages = initPages.reduce((prev, current, index) => {
      prev.push(current);
      initPages[index + 1] !== undefined &&
        initPages[index + 1] - initPages[index] > 1 &&
        prev.push("···");
      return prev;
    }, []);

    return {
      pages,
    };
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
    onClickPrev() {},
    onClickNext() {},
    change(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";

.et-pagination {
  font-size: $font-size;
  user-select: none;
  display: inline-flex;
  align-items: center;
  &-icon {
    font-size: 18px;
    cursor: pointer;
    &:hover {
      fill: $primary-color;
    }
    &.disabled {
      fill: $disabled-color;
      cursor: default;
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