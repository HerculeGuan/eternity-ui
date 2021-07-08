<template>
  <div class="et-table-wrapper">
    <table class="et-table" :class="{ border, compact, 'no-stripe': !stripe }">
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              @change="onChangeAllItems"
              ref="allChecked"
            />
          </th>
          <th v-if="indexVisible">#</th>
          <th v-for="column in columns" :key="column.field">
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="item.id">
          <td>
            <input
              type="checkbox"
              @change="onChangeItem(item, $event)"
              :checked="inSelectItems(item)"
            />
          </td>
          <td v-if="indexVisible">{{ index + 1 }}</td>
          <template v-for="column in columns">
            <td :key="column.field">{{ item[column.field] }}</td>
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
    selectItems: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    onChangeItem(item, event) {
      let selected = event.target.checked;
      let copy = JSON.parse(JSON.stringify(this.selectItems));
      if (selected) {
        copy.push(item);
      } else {
        copy = copy.filter((i) => i.id !== item.id);
        // copy.splice(copy.indexOf(item), 1);
      }
      this.$emit("update:selectItems", copy);
    },
    onChangeAllItems(event) {
      let selected = event.target.checked;
      this.$emit("update:selectItems", selected ? this.data : []);
    },
    inSelectItems(item) {
      return this.selectItems.filter((i) => i.id === item.id).length > 0;
    },
  },
  watch: {
    selectItems() {
      if (this.selectItems.length === 0) {
        this.$refs.allChecked.checked = false;
        this.$refs.allChecked.indeterminate = false;
      } else if (this.selectItems.length === this.data.length) {
        this.$refs.allChecked.checked = true;
        this.$refs.allChecked.indeterminate = false;
      } else {
        this.$refs.allChecked.indeterminate = true;
      }
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