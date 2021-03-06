<template>
  <div class="icon-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-icon name="setting"></et-icon>
      </div>
      <code-wrap :code="content" :tips="tips"></code-wrap>
    </div>
  </div>
</template>

<script>
import Icon from "../../../src/components/Icon/icon";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-icon": Icon,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content: `
    <et-icon name="setting"></et-icon>
    `,
      tips: "使用<code>name</code>来设置图标",
    };
  },
};
</script>
