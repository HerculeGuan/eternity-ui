<template>
  <div class="et-table-wrapper">
    <table class="et-table">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="column in columns">
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data">
          <td>{{ index }}</td>
          <template v-for="column in columns">
            <td>{{ item[column.field] }}</td>
          </template>
        </tr>
      </tbody>
    </table>
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
@import "../var";
.et-table {
  display: inline-block;
  border-collapse: collapse;
  border-spacing: 0;
  tr,td,th {
    border: none;
    border-bottom: 1px solid $grey
  }
}
</style>