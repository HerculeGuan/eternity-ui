<template>
  <div>
    <et-icon name="setting"></et-icon>
    <code-wrap :code="content"></code-wrap>
  </div>
</template>

<script>
import Icon from "../../../src/components/Icon/icon";
import CodeWrap from "../utils/code-wrap";

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
    };
  },
};
</script>
