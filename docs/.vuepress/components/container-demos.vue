<template>
  <div class="container-demos">
    <div class="code-example">
      <h3>基础布局</h3>
      <p>
        <code>et-container</code
        >：包裹外层容器，可嵌套<code>et-container</code>使用
      </p>
      <p><code>et-content</code>：容器内容</p>
      <p><code>et-header</code>：容器头部</p>
      <p><code>et-footer</code>：容器底部</p>
      <p><code>et-aside</code>：容器侧边</p>

      <div class="example">
        <et-container>
          <et-header>This is Header</et-header>
          <et-container>
            <et-aside>This is Aside</et-aside>
            <et-content>This is Content</et-content>
          </et-container>
          <et-footer>This is Footer</et-footer>
        </et-container>
      </div>
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>
  </div>
</template>

<script>
import Container from "../../../src/components/Container/container";
import Header from "../../../src/components/Container/header";
import Aside from "../../../src/components/Container/aside";
import Content from "../../../src/components/Container/content";
import Footer from "../../../src/components/Container/footer";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-container": Container,
    "et-header": Header,
    "et-aside": Aside,
    "et-content": Content,
    "et-footer": Footer,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content1: `
    <template>
      <et-container>
        <et-header>This is Header</et-header>
        <et-container>
          <et-aside>This is Aside</et-aside>
          <et-content>This is Content</et-content>
        </et-container>
        <et-footer>This is Footer</et-footer>
      </et-container>
    <template>

    `,
      tips1:
        "包含<code>el-header</code>、<code>el-content</code>、<code>el-footer</code><code>el-aside</code>的基础布局",
    };
  },
};
</script>
<style lang="scss" scoped>
.container-demos {
  .container {
    background-color: lightblue;
    .header,
    .footer {
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: rgb(62, 85, 110);
      color: white;
    }
    .aside,
    .content {
      height: 200px;
      line-height: 200px;
      text-align: center;
    }
    .aside {
      width: 20%;
      background-color: lightcyan;
    }
  }
}
</style>
