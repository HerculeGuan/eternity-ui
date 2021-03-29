<template>
  <div class="nav-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <p>可以展开多个面板，面板之间互相不影响</p>
      <div class="example">
        <et-nav :selected.sync="selected1">
          <et-nav-item name="home">首页</et-nav-item>
          <et-subnav name="about">
            <template v-slot:title>关于</template>
            <et-nav-item name="culture">文化</et-nav-item>
            <et-nav-item name="team">团队</et-nav-item>
            <et-subnav name="contact">
              <template v-slot:title>联系</template>
              <et-nav-item name="wechat">微信</et-nav-item>
              <et-nav-item name="qq">QQ</et-nav-item>
              <et-subnav name="email">
                <template v-slot:title>邮箱</template>
                <et-nav-item name="wangyi">网易邮箱</et-nav-item>
                <et-nav-item name="souhu">搜狐邮箱</et-nav-item>
              </et-subnav>
            </et-subnav>
          </et-subnav>
          <et-nav-item name="content">内容</et-nav-item>
        </et-nav>
      </div>
      <!-- <code-wrap :code="content1" :tips="tips1"></code-wrap> -->
    </div>
    <div class="code-example">
      <h3>基础用法</h3>
      <p>可以展开多个面板，面板之间互相不影响</p>
      <div class="example">
        <et-nav :selected.sync="selected1" mode="vertical">
          <et-nav-item name="home">首页</et-nav-item>
          <et-subnav name="about">
            <template v-slot:title>关于</template>
            <et-nav-item name="culture">文化</et-nav-item>
            <et-nav-item name="team">团队</et-nav-item>
            <et-subnav name="contact">
              <template v-slot:title>联系</template>
              <et-nav-item name="wechat">微信</et-nav-item>
              <et-nav-item name="qq">QQ</et-nav-item>
              <et-subnav name="email">
                <template v-slot:title>邮箱</template>
                <et-nav-item name="wangyi">网易邮箱</et-nav-item>
                <et-nav-item name="souhu">搜狐邮箱</et-nav-item>
              </et-subnav>
            </et-subnav>
          </et-subnav>
          <et-nav-item name="content">内容</et-nav-item>
        </et-nav>
      </div>
      <!-- <code-wrap :code="content1" :tips="tips1"></code-wrap> -->
    </div>
  </div>
</template>

<script>
import Nav from "../../../src/components/Nav/nav";
import NavItem from "../../../src/components/Nav/nav-item";
import NavSubnav from "../../../src/components/Nav/subnav";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-nav": Nav,
    "et-nav-item": NavItem,
    "et-subnav": NavSubnav,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      selected1: ["team"],
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
    };
  },
  methods: {},
};
</script>
