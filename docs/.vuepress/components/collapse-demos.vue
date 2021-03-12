<template>
  <div class="collapse-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <p>可以展开多个面板，面板之间互相不影响</p>
      <div class="example">
        <et-collapse :selected.sync="selected1" @update:selected="updateSelect">
          <et-collapse-item title="财经新闻" name="first"
            >这是一条财经新闻</et-collapse-item
          >
          <et-collapse-item title="体育新闻" name="second"
            >这是一条体育新闻</et-collapse-item
          >
          <et-collapse-item title="热点新闻" name="third"
            >这是一条热点新闻</et-collapse-item
          >
        </et-collapse>
      </div>
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>手风琴效果</h3>
      <p>每次只能展开一个面板</p>
      <div class="example">
        <et-collapse
          accordion
          :selected.sync="selected2"
          @update:selected="updateSelect"
        >
          <et-collapse-item title="财经新闻" name="first"
            >这是一条财经新闻</et-collapse-item
          >
          <et-collapse-item title="体育新闻" name="second"
            >这是一条体育新闻</et-collapse-item
          >
          <et-collapse-item title="热点新闻" name="third"
            >这是一条热点新闻</et-collapse-item
          >
        </et-collapse>
      </div>
      <code-wrap :code="content2" :tips="tips2"></code-wrap>
    </div>
  </div>
</template>

<script>
import Collapse from "../../../src/components/Collapse/collapse";
import CollapseItem from "../../../src/components/Collapse/collapse-item";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-collapse": Collapse,
    "et-collapse-item": CollapseItem,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      selected1: ["first"],
      selected2: ["first"],
      content1: `
    <template>
      <et-collapse :selected.sync="selected" @update:selected="updateSelect">
        <et-collapse-item title="财经新闻" name="first">
            这是一条财经新闻
        </et-collapse-item>
        <et-collapse-item title="体育新闻" name="second">
            这是一条体育新闻
        </et-collapse-item>
        <et-collapse-item title="热点新闻" name="third">
            这是一条热点新闻
        </et-collapse-item>
      </et-collapse>
    </template>

    <script>
      export default {
        data() {
          return {
            selected: ["first"],
          }
        },
        methods: {
          updateSelect(select){
            console.log(select);
          }
        },
      }
    \<\/script>
    `,
      tips1: "使用<code>selected.sync</code>动态绑定选中面板的值",
      content2: `
    <template>
      <et-collapse accordion :selected.sync="selected" @update:selected="updateSelect">
        <et-collapse-item title="财经新闻" name="first">
            这是一条财经新闻
        </et-collapse-item>
        <et-collapse-item title="体育新闻" name="second">
            这是一条体育新闻
        </et-collapse-item>
        <et-collapse-item title="热点新闻" name="third">
            这是一条热点新闻
        </et-collapse-item>
      </et-collapse>
    </template>

    <script>
      export default {
        data() {
          return {
            selected: ["first"],
          }
        },
        methods: {
          updateSelect(select){
            console.log(select);
          }
        },
      }
    \<\/script>
    `,
      tips2: "使用<code>accordion</code>开启手风琴效果",
    };
  },
  methods: {
    updateSelect(select) {
      console.log(select);
    },
  },
};
</script>
