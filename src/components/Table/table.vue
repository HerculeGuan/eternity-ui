<template>
  <div class="et-table">
    <table></table>
  </div>
</template>
<script>
export default {
  name: "EtTable",
  props: {
    columns: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>