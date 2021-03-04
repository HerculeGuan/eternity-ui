<template>
  <div>
    <div class="code-example">
      <div class="title">默认按钮</div>
      <div class="example">
        <et-button>默认按钮</et-button>
      </div>
      <code-wrap :code="content1"></code-wrap>
    </div>
    <div class="code-example">
      <div class="example">
        <et-button icon="setting">默认按钮</et-button>
      </div>
      <code-wrap :code="content2"></code-wrap>
    </div>

    <et-button loading>默认按钮</et-button>
    <et-button disabled>默认按钮</et-button>
  </div>
</template>

<script>
import Button from "../../../src/components/Button/button";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-button": Button,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content1: `
    <template>
      <et-button>默认按钮</et-button>
    </template>
    `,
      content2: `
    <template>
      <et-button icon="setting">默认按钮</et-button>
    </template>
    `,
    };
  },
};
</script>
