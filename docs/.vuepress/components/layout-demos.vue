<template>
  <div class="layout-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-row>
          <et-col span="24"><div class="box"></div></et-col>
        </et-row>
        <et-row gutter="20">
          <et-col span="12"><div class="box"></div></et-col>
          <et-col span="12"><div class="box"></div></et-col>
        </et-row>
        <et-row gutter="20">
          <et-col span="8"><div class="box"></div></et-col>
          <et-col span="8"><div class="box"></div></et-col>
          <et-col span="8"><div class="box"></div></et-col>
        </et-row>
        <et-row gutter="20">
          <et-col span="6"><div class="box"></div></et-col>
          <et-col span="6"><div class="box"></div></et-col>
          <et-col span="6"><div class="box"></div></et-col>
          <et-col span="6"><div class="box"></div></et-col>
        </et-row>
      </div>
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>响应式布局</h3>
      <div class="example">
        <et-row gutter="20">
          <et-col span="24"><div class="box"></div></et-col>
        </et-row>
        <et-row gutter="20">
          <et-col span="12"><div class="box"></div></et-col>
          <et-col span="12"><div class="box"></div></et-col>
        </et-row>
        <et-row gutter="20">
          <et-col span="8"><div class="box"></div></et-col>
          <et-col span="8"><div class="box"></div></et-col>
          <et-col span="8"><div class="box"></div></et-col>
        </et-row>
        <et-row gutter="20">
          <et-col span="6"><div class="box"></div></et-col>
          <et-col span="6"><div class="box"></div></et-col>
          <et-col span="6"><div class="box"></div></et-col>
          <et-col span="6"><div class="box"></div></et-col>
        </et-row>
      </div>
      <code-wrap :code="content2" :tips="tips2"></code-wrap>
    </div>
  </div>
</template>

<script>
import Col from "../../../src/components/Layout/col";
import Row from "../../../src/components/Layout/row";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-col": Col,
    "et-row": Row,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content1: `
    <template>
      <et-row>
        <et-col span="24"><div class="box"></div></et-col>
      </et-row>
      <et-row gutter="20">
        <et-col span="12"><div class="box"></div></et-col>
        <et-col span="12"><div class="box"></div></et-col>
      </et-row>
      <et-row gutter="20">
        <et-col span="8"><div class="box"></div></et-col>
        <et-col span="8"><div class="box"></div></et-col>
        <et-col span="8"><div class="box"></div></et-col>
      </et-row>
      <et-row gutter="20">
        <et-col span="6"><div class="box"></div></et-col>
        <et-col span="6"><div class="box"></div></et-col>
        <et-col span="6"><div class="box"></div></et-col>
        <et-col span="6"><div class="box"></div></et-col>
      </et-row>
    <template>
    `,
      tips1: "包含<code>et-row</code>和<code>et-col</code>的基础布局",
      content2: `
    <template>
      <et-row>
        <et-col span="24"><div class="box"></div></et-col>
      </et-row>
      <et-row>
        <et-col span="12"><div class="box"></div></et-col>
        <et-col span="12"><div class="box"></div></et-col>
      </et-row>
      <et-row>
        <et-col span="8"><div class="box"></div></et-col>
        <et-col span="12"><div class="box"></div></et-col>
        <et-col span="4"><div class="box"></div></et-col>
      </et-row>
    <template>
    `,
      tips2: "使用<code>gutter</code>属性确定<code>et-col</code>之间的间距",
    };
  },
};
</script>

<style lang="scss" scoped>
.layout-demos {
  .box {
    height: 40px;
    background: #9ca9bd;
    margin: 8px 0;
    border-radius: 4px;
  }
}
</style>
