<template>
  <div class="et-pagination">
    <span v-for="page in pages"> {{ page }} </span>
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
  },
};
</script>

<style lang="scss" scoped>
.et-pagination {
}
</style>