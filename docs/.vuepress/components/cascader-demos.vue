<template>
  <div class="cascader-demos">
    <div class="code-example">
      <h3>简单</h3>
      <div class="example">
        <et-cascader
          :options="options"
          :popover-height="200"
          :selected.sync="selected"
        ></et-cascader>
      </div>
      <code-wrap :code="content1"></code-wrap>
      {{ options }}
    </div>
  </div>
</template>

<script>
import Cascader from "../../../src/components/Cascader/cascader";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";
import db from "../../../src/components/Cascader/db";

function ajax(parentId = 0) {
  return db.filter((item) => item.parent_id == parentId);
}

export default {
  components: {
    "et-cascader": Cascader,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      selected: [],
      options: ajax(),
      // options: [
      //   {
      //     name: "河北省",
      //     children: [
      //       {
      //         name: "保定市",
      //         children: [
      //           { name: "莲池区" },
      //           { name: "满城区" },
      //           { name: "涞水县" },
      //         ],
      //       },
      //       {
      //         name: "石家庄市",
      //         children: [{ name: "长安区" }, { name: "桥西区" }],
      //       },
      //       {
      //         name: "唐山市",
      //         children: [
      //           {
      //             name: "遵化市",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     name: "江苏省",
      //     children: [
      //       {
      //         name: "南京市",
      //         children: [
      //           { name: "玄武区" },
      //           { name: "秦淮区" },
      //           { name: "鼓楼区" },
      //         ],
      //       },
      //       {
      //         name: "无锡市",
      //         children: [
      //           { name: "锡山区" },
      //           { name: "惠山区" },
      //           { name: "滨湖区" },
      //         ],
      //       },
      //     ],
      //   },
      //   {
      //     name: "上海市",
      //     children: [
      //       {
      //         name: "杨浦区",
      //       },
      //       {
      //         name: "宝山区",
      //       },
      //     ],
      //   },
      // ],
      content1: `
    null
    `,
    };
  },
};
</script>
<style lang="scss" scoped></style>
