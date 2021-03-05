<template>
  <div>
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example button-example">
        <et-button>默认按钮</et-button>
        <et-button type="primary">主要按钮</et-button>
        <et-button type="success">成功按钮</et-button>
        <et-button type="warning">警告按钮</et-button>
        <et-button type="danger">危险按钮</et-button>
      </div>
      <code-wrap :code="content1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>禁用状态</h3>
      <p>带有禁用状态的按钮</p>
      <div class="example button-example">
        <et-button disabled>禁用按钮</et-button>
        <et-button type="primary" disabled>主要按钮</et-button>
        <et-button type="success" disabled>成功按钮</et-button>
        <et-button type="warning" disabled>警告按钮</et-button>
        <et-button type="danger" disabled>危险按钮</et-button>
      </div>
      <code-wrap :code="content2" :tips="tips2"></code-wrap>
    </div>

    <div class="code-example">
      <h3>加载状态</h3>
      <p>带有加载状态的按钮</p>
      <div class="example button-example">
        <et-button loading>加载按钮</et-button>
        <et-button type="primary" loading>主要按钮</et-button>
        <et-button type="success" loading>成功按钮</et-button>
        <et-button type="warning" loading>警告按钮</et-button>
        <et-button type="danger" loading>危险按钮</et-button>
      </div>
      <code-wrap :code="content3" :tips="tips3"></code-wrap>
    </div>

    <div class="code-example">
      <h3>图标按钮</h3>
      <div class="example button-example">
        <et-button icon="setting">图标按钮</et-button>
        <et-button icon="setting" icon-position="right">图标按钮</et-button>
      </div>
      <code-wrap :code="content4" :tips="tips4"></code-wrap>
    </div>

    <div class="code-example">
      <h3>按钮组</h3>
      <p>多个按钮并排</p>
      <div class="example">
        <et-button-group>
          <et-button icon="left">上一页</et-button>
          <et-button>更多</et-button>
          <et-button icon="right" icon-position="right">下一页</et-button>
        </et-button-group>
      </div>
      <code-wrap :code="content5" :tips="tips5"></code-wrap>
    </div>
  </div>
</template>

<script>
import Button from "../../../src/components/Button/button";
import ButtonGroup from "../../../src/components/Button/button-group.vue";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-button": Button,
    "et-button-group": ButtonGroup,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content1: `
    <template>
      <et-button>默认按钮</et-button>
      <et-button type="primary">主要按钮</et-button>
      <et-button type="success">成功按钮</et-button>
      <et-button type="warning">警告按钮</et-button>
      <et-button type="danger">危险按钮</et-button>
    </template>
    `,
      content2: `
    <template>
      <et-button disabled>禁用按钮</et-button>
      <et-button type="primary" disabled>主要按钮</et-button>
      <et-button type="success" disabled>成功按钮</et-button>
      <et-button type="warning" disabled>警告按钮</et-button>
      <et-button type="danger" disabled>危险按钮</et-button>
    </template>
    `,
      tips2: "使用<code>disabled</code>属性禁用按钮",
      content3: `
    <template>
      <et-button loading>加载按钮</et-button>
      <et-button type="primary" loading>主要按钮</et-button>
      <et-button type="success" loading>成功按钮</et-button>
      <et-button type="warning" loading>警告按钮</et-button>
      <et-button type="danger" loading>危险按钮</et-button>
    </template>
    `,
      tips3: "使用<code>loading</code>属性给按钮添加加载状态",
      content4: `
    <template>
      <et-button icon="setting">图标按钮</et-button>
      <et-button icon="setting" icon-position="right">图标按钮</et-button>
    </template>
    `,
      tips4:
        "使用<code>icon</code>属性给按钮添加图标，通过<code>icon-position</code>属性给按钮添加方位",
      content5: `
    <template>
      <et-button-group>
        <et-button icon="left">上一页</et-button>
        <et-button>更多</et-button>
        <et-button icon="right" icon-position="right">下一页</et-button>
      </et-button-group>
    </template>
    `,
      tips5: "使用<code>et-button-group</code>标签嵌套按钮",
    };
  },
};
</script>
