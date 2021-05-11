<template>
  <div class="et-pagination">
    <span
      class="et-pagination-item"
      :class="{ active: page === currentPage, separator: page === '...' }"
      v-for="page in pages"
      @click="change(page)"
      >{{ page }}</span
    >
  </div>
</template>

<script>
export default {
  name: "EtPagination",
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
      ].sort((a, b) => a > b)
    );
    let pages = initPages.reduce((prev, current, index) => {
      prev.push(current);
      initPages[index + 1] !== undefined &&
        initPages[index + 1] - initPages[index] > 1 &&
        prev.push("...");
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
    &.separator {
    }
  }
}
</style>