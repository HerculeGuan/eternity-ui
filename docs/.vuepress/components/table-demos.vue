<template>
  <div class="table-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-table :columns="columns" :data="data" @changeItem="x"></et-table>
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
        { name: "Sherlock", score: 100 },
        { name: "Hercule", score: 90 },
        { name: "Carions", score: 80 },
        { name: "Mike", score: 70 },
        { name: "Allia", score: 84 },
      ],
      content1: `

      `,
      tips1: "使用<code>selected.sync</code>动态绑定当前轮播的值",
    };
  },
  created() {},
  methods: {
    x(obj){
      console.log(obj);
    }
  },
};
</script>
<style lang="scss" scoped>
</style>
