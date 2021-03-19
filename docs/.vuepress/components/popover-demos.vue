<template>
  <div>
    <et-popover trigger="hover">
      <template v-slot:content>
        <div>这是我的内容1</div>
      </template>
      <et-button>按钮1</et-button>
    </et-popover>
    <et-popover position="bottom" trigger="click">
      <template v-slot:content>
        <div>这是我的内容2</div>
      </template>
      <et-button>按钮2</et-button>
    </et-popover>
    <et-popover position="left" trigger="hover">
      <template v-slot:content>
        <div>这是我的内容3</div>
      </template>
      <et-button>按钮3</et-button>
    </et-popover>
    <et-popover position="right" trigger="hover">
      <template v-slot:content>
        <div>这是我的内容4</div>
      </template>
      <et-button>按钮4</et-button>
    </et-popover>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Popover from "../../../src/components/Popover/popover";
import Button from "../../../src/components/Button/button";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-popover": Popover,
    "et-button": Button,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content: `
 
    `,
    };
  },
};
</script>
