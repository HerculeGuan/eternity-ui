<template>
  <div class="table-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-table
          :columns="columns"
          :data="data"
          :selectItems.sync="selectedList"
        ></et-table>
      </div>
      <!-- <code-wrap :code="content1" :tips="tips1"></code-wrap> -->
    </div>
  </div>
</template>

<script>
import Table from "../../../src/components/Table/table";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-table": Table,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      columns: [
        { text: "姓名", field: "name" },
        { text: "分数", field: "score" },
      ],
      data: [
        { id: 1, name: "Sherlock", score: 100 },
        { id: 2, name: "Hercule", score: 90 },
        { id: 3, name: "Carions", score: 80 },
        { id: 4, name: "Mike", score: 70 },
        { id: 5, name: "Allia", score: 84 },
      ],
      selectedList: [],
      content1: `

      `,
      tips1: "使用<code>selected.sync</code>动态绑定当前轮播的值",
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
