<template>
  <div class="tabs-demos">
    <div class="code-example">
      <h3>基础标签页</h3>
      <div class="example button-example">
        <et-tabs :selected.sync="selectedTab1" @tab-click="tabClick">
          <et-tabs-head>
            <et-tabs-item name="first">财经新闻</et-tabs-item>
            <et-tabs-item name="second">体育新闻</et-tabs-item>
            <et-tabs-item name="third">热点新闻</et-tabs-item>
          </et-tabs-head>
          <et-tabs-body>
            <et-tabs-pane name="first">这是一条财经新闻</et-tabs-pane>
            <et-tabs-pane name="second">这是一条体育新闻</et-tabs-pane>
            <et-tabs-pane name="third">这是一条热点新闻</et-tabs-pane>
          </et-tabs-body>
        </et-tabs>
      </div>
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>禁用标签页</h3>
      <div class="example button-example">
        <et-tabs :selected.sync="selectedTab2" @tab-click="tabClick">
          <et-tabs-head>
            <et-tabs-item name="first">财经新闻</et-tabs-item>
            <et-tabs-item name="second" disabled>体育新闻</et-tabs-item>
            <et-tabs-item name="third">热点新闻</et-tabs-item>
          </et-tabs-head>
          <et-tabs-body>
            <et-tabs-pane name="first">这是一条财经新闻</et-tabs-pane>
            <et-tabs-pane name="second">这是一条体育新闻</et-tabs-pane>
            <et-tabs-pane name="third">这是一条热点新闻</et-tabs-pane>
          </et-tabs-body>
        </et-tabs>
      </div>
      <code-wrap :code="content2" :tips="tips2"></code-wrap>
    </div>

    <div class="code-example">
      <h3>自定义按钮</h3>
      <div class="example button-example">
        <et-tabs :selected.sync="selectedTab3" @tab-click="tabClick">
          <et-tabs-head>
            <template slot="actions"
              ><et-button type="primary">普通按钮</et-button></template
            >
            <et-tabs-item name="first">财经新闻</et-tabs-item>
            <et-tabs-item name="second">体育新闻</et-tabs-item>
            <et-tabs-item name="third">热点新闻</et-tabs-item>
          </et-tabs-head>
          <et-tabs-body>
            <et-tabs-pane name="first">这是一条财经新闻</et-tabs-pane>
            <et-tabs-pane name="second">这是一条体育新闻</et-tabs-pane>
            <et-tabs-pane name="third">这是一条热点新闻</et-tabs-pane>
          </et-tabs-body>
        </et-tabs>
      </div>
      <code-wrap :code="content3" :tips="tips3"></code-wrap>
    </div>
  </div>
</template>

<script>
import Tabs from "../../../src/components/Tabs/tabs";
import TabsBody from "../../../src/components/Tabs/tabs-body";
import TabsHead from "../../../src/components/Tabs/tabs-head";
import TabsItem from "../../../src/components/Tabs/tabs-item";
import TabsPane from "../../../src/components/Tabs/tabs-pane";
import Button from "../../../src/components/Button/button";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-tabs": Tabs,
    "et-tabs-body": TabsBody,
    "et-tabs-head": TabsHead,
    "et-tabs-item": TabsItem,
    "et-tabs-pane": TabsPane,
    "et-button": Button,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      selectedTab1: "first",
      selectedTab2: "first",
      selectedTab3: "first",
      content1: `
    <template>
      <et-tabs :selected.sync="selectedTab" @tab-click="tabClick">
        <et-tabs-head>
          <et-tabs-item name="first">财经新闻</et-tabs-item>
          <et-tabs-item name="second">体育新闻</et-tabs-item>
          <et-tabs-item name="third">热点新闻</et-tabs-item>
        </et-tabs-head>
        <et-tabs-body>
          <et-tabs-pane name="first">这是一条财经新闻</et-tabs-pane>
          <et-tabs-pane name="second">这是一条体育新闻</et-tabs-pane>
          <et-tabs-pane name="third">这是一条热点新闻</et-tabs-pane>
        </et-tabs-body>
      </et-tabs>
    </template>

    <script>
      export default {
        data() {
          return {
            selectedTab: "first",
          }
        },
        methods: {
          tabClick(name,vm) {
            console.log(name,vm);
          },
        },
      }
    \<\/script>
    `,
      tips1: "使用<code>selected.sync</code>动态绑定选中标签的值",

      content2: `
    <template>
      <et-tabs :selected.sync="selectedTab" @tab-click="tabClick">
        <et-tabs-head>
          <et-tabs-item name="first">财经新闻</et-tabs-item>
          <et-tabs-item name="second" disabled>体育新闻</et-tabs-item>
          <et-tabs-item name="third">热点新闻</et-tabs-item>
        </et-tabs-head>
        <et-tabs-body>
          <et-tabs-pane name="first">这是一条财经新闻</et-tabs-pane>
          <et-tabs-pane name="second">这是一条体育新闻</et-tabs-pane>
          <et-tabs-pane name="third">这是一条热点新闻</et-tabs-pane>
        </et-tabs-body>
      </et-tabs>
    </template>

    <script>
      export default {
        data() {
          return {
            selectedTab: "first",
          }
        },
        methods: {
          tabClick(name,vm) {
            console.log(name,vm);
          },
        },
      }
    \<\/script>
    `,
      tips2: "使用<code>disabled</code>属性禁用标签页",

      content3: `
    <template>
      <et-tabs :selected.sync="selectedTab" @tab-click="tabClick">
        <et-tabs-head>
          <template slot="actions"
            ><et-button type="primary">普通按钮</et-button></template
          >
          <et-tabs-item name="first">财经新闻</et-tabs-item>
          <et-tabs-item name="second">体育新闻</et-tabs-item>
          <et-tabs-item name="third">热点新闻</et-tabs-item>
        </et-tabs-head>
        <et-tabs-body>
          <et-tabs-pane name="first">这是一条财经新闻</et-tabs-pane>
          <et-tabs-pane name="second">这是一条体育新闻</et-tabs-pane>
          <et-tabs-pane name="third">这是一条热点新闻</et-tabs-pane>
        </et-tabs-body>
      </et-tabs>  
    </template>

    <script>
      export default {
        data() {
          return {
            selectedTab: "first",
          }
        },
        methods: {
          tabClick(name,vm) {
            console.log(name,vm);
          },
        },
      }
    \<\/script>
    `,
      tips3: "使用<code>actions</code>插槽来自定义右侧内容",
    };
  },
  methods: {
    tabClick(name, vm) {
      console.log(name, vm);
    },
  },
};
</script>
