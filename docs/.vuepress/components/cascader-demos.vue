<template>
  <div class="cascader-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-cascader
          :options.sync="options1"
          :popover-height="200"
          :selected.sync="selected1"
        ></et-cascader>
      </div>
      <code-wrap :code="content1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>动态加载</h3>
      <div class="example">
        <et-cascader
          :options.sync="options2"
          :popover-height="200"
          :selected.sync="selected2"
          :load-data="loadData"
        ></et-cascader>
      </div>
      <code-wrap :code="content1"></code-wrap>
    </div>
  </div>
</template>

<script>
import Cascader from "../../../src/components/Cascader/cascader";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";
import db from "../../../src/components/Cascader/db";
// import { removeListener } from "../../../src/directive/click-outside";

function ajaxPromise(parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id === parentId);
      result.forEach((node) => {
        node.isLeaf = !(
          db.filter((item) => item.parent_id === node.id).length > 0
        );
      });
      success(result);
    }, 500);
  });
}

export default {
  components: {
    "et-cascader": Cascader,
    "code-wrap": CodeWrap,
  },
  created() {
    ajaxPromise(0).then((result) => {
      this.options2 = result;
    });
  },
  methods: {
    loadData(node, callback) {
      const { id } = node;
      ajaxPromise(id).then((result) => {
        // 回调:把别人传给我的函数调用一下
        callback(result);
      });
    },
  },
  // destroyed() {
  //   removeListener();
  // },
  data() {
    return {
      selected1: [],
      selected2: [],
      options2: [],
      options1: [
        {
          name: "河北省",
          children: [
            {
              name: "保定市",
              children: [
                { name: "莲池区" },
                { name: "满城区" },
                { name: "涞水县" },
              ],
            },
            {
              name: "石家庄市",
              children: [{ name: "长安区" }, { name: "桥西区" }],
            },
            {
              name: "唐山市",
              children: [
                {
                  name: "遵化市",
                },
              ],
            },
          ],
        },
        {
          name: "江苏省",
          children: [
            {
              name: "南京市",
              children: [
                { name: "玄武区" },
                { name: "秦淮区" },
                { name: "鼓楼区" },
              ],
            },
            {
              name: "无锡市",
              children: [
                { name: "锡山区" },
                { name: "惠山区" },
                { name: "滨湖区" },
              ],
            },
          ],
        },
        {
          name: "上海市",
          children: [
            {
              name: "杨浦区",
            },
            {
              name: "宝山区",
            },
          ],
        },
      ],
      content1: `
    null
    `,
    };
  },
};
</script>
<style lang="scss" scoped></style>
