<template>
  <div>
    <div class="demo">
      <et-input />
    </div>
    <div>
      <et-input disabled />
    </div>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Input from "../../../src/components/Input/input";

export default {
  components: {
    "et-input": Input,
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
