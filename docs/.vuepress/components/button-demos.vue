<template>
  <div>
    <et-button>默认按钮</et-button>
    <et-button icon="setting">默认按钮</et-button>
    <et-button loading>默认按钮</et-button>
    <et-button disabled>默认按钮</et-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from "../../../src/components/button/button";

export default {
  components: {
    "et-button": Button,
  },
  data() {
    return {
      content: `
    <et-button>默认按钮</et-button>
    <et-button icon="settings">默认按钮</et-button>
    <et-button loading>默认按钮</et-button>
    <et-button disabled>默认按钮</et-button>
    `,
    };
  },
};
</script>
