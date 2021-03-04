<template>
  <div>
    <et-button>默认按钮</et-button>
    <et-button icon="setting">默认按钮</et-button>
    <et-button loading>默认按钮</et-button>
    <et-button disabled>默认按钮</et-button>
    <code-wrap :code="content"></code-wrap>
  </div>
</template>

<script>
import Button from "../../../src/components/button/button";
import CodeWrap from "../utils/code-wrap";

export default {
  components: {
    "et-button": Button,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content: `
    <template>
      <et-button>默认按钮</et-button>
      <et-button icon="settings">默认按钮</et-button>
      <et-button loading>默认按钮</et-button>
      <et-button disabled>默认按钮</et-button>
    </template>
    `,
    };
  },
};
</script>
