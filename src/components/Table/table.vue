<template>
  <div class="et-table-wrapper">
    <table class="et-table" :class="{ border, compact, 'no-stripe': !stripe }">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th v-if="indexVisible">#</th>
          <th v-for="column in columns">
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data">
          <td>
            <input
              type="checkbox"
              @change="onChangeItem(item, index, $event)"
            />
          </td>
          <td v-if="indexVisible">{{ index + 1 }}</td>
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
    indexVisible: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: true,
    },
    compact: {
      type: Boolean,
      default: false,
    },
    stripe: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onChangeItem(item, index, event) {
      this.$emit("changeItem", { selected: event.target.checked, item, index });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../var";
.et-table {
  width: 100%;
  border: 1px solid $grey;
  border-collapse: collapse;
  border-spacing: 0;
  display: table;
  td,
  th {
    border: none;
    border-bottom: 1px solid $grey;
    text-align: left;
  }
  &.border {
    td,
    th {
      border: 1px solid $grey;
    }
  }
  &.compact {
    td,
    th {
      padding: 4px;
    }
  }
  &.no-stripe {
    tr {
      background: none;
    }
  }
}
</style>