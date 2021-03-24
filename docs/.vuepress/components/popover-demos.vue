<template>
  <div class="popover-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example popover-example">
        <et-popover>
          <template v-slot:content>
            <div>这是我的内容上</div>
          </template>
          <et-button>click上</et-button>
        </et-popover>
        <et-popover position="bottom">
          <template v-slot:content>
            <div>这是我的内容下</div>
          </template>
          <et-button>click下</et-button>
        </et-popover>
        <et-popover position="left">
          <template v-slot:content>
            <div>这是我的内容左</div>
          </template>
          <et-button>click左</et-button>
        </et-popover>
        <et-popover position="right">
          <template v-slot:content>
            <div>这是我的内容右</div>
          </template>
          <et-button>click右</et-button>
        </et-popover>
      </div>
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>hover触发</h3>
      <div class="example popover-example">
        <et-popover trigger="hover">
          <template v-slot:content>
            <div>这是我的内容上</div>
          </template>
          <et-button>hover上</et-button>
        </et-popover>
        <et-popover position="bottom" trigger="hover">
          <template v-slot:content>
            <div>这是我的内容下</div>
          </template>
          <et-button>hover下</et-button>
        </et-popover>
        <et-popover position="left" trigger="hover">
          <template v-slot:content>
            <div>这是我的内容左</div>
          </template>
          <et-button>hover左</et-button>
        </et-popover>
        <et-popover position="right" trigger="hover">
          <template v-slot:content>
            <div>这是我的内容右</div>
          </template>
          <et-button>hover右</et-button>
        </et-popover>
      </div>
      <code-wrap :code="content2" :tips="tips2"></code-wrap>
    </div>
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
      content1: `
    <template>
      <et-popover>
        <template v-slot:content>
          <div>这是我的内容上</div>
        </template>
        <et-button>click上</et-button>
      </et-popover>
      <et-popover position="bottom">
        <template v-slot:content>
          <div>这是我的内容下</div>
        </template>
        <et-button>click下</et-button>
      </et-popover>
      <et-popover position="left">
        <template v-slot:content>
          <div>这是我的内容左</div>
        </template>
        <et-button>click左</et-button>
      </et-popover>
      <et-popover position="right">
        <template v-slot:content>
          <div>这是我的内容右</div>
        </template>
        <et-button>click右</et-button>
      </et-popover>
    </template>
    `,
      tips1: "使用<code>position</code>设置弹出框的位置",
      content2: `
    <template>
      <et-popover trigger="hover">
        <template v-slot:content>
          <div>这是我的内容上</div>
        </template>
        <et-button>hover上</et-button>
      </et-popover>
      <et-popover position="bottom" trigger="hover">
        <template v-slot:content>
          <div>这是我的内容下</div>
        </template>
        <et-button>hover下</et-button>
      </et-popover>
      <et-popover position="left" trigger="hover">
        <template v-slot:content>
          <div>这是我的内容左</div>
        </template>
        <et-button>hover左</et-button>
      </et-popover>
      <et-popover position="right" trigger="hover">
        <template v-slot:content>
          <div>这是我的内容右</div>
        </template>
        <et-button>hover右</et-button>
      </et-popover>
    </template>
    `,
      tips2: "使用<code>trigger</code>设置弹出框的触发方式",
    };
  },
};
</script>

<style lang="scss" scope>
.popover-demos {
  .popover-example {
    .et-popover {
      margin-right: 20px;
    }
  }
}
</style>
