<template>
  <div class="toast-demos">
    <div class="code-example toast-example">
      <h3>基础用法</h3>
      <p>从不同方位弹出的轻提示</p>
      <div class="example">
        <et-button @click="showToast1('top')">提示向上</et-button>
        <et-button @click="showToast1('middle')">提示居中</et-button>
        <et-button @click="showToast1('bottom')">提示向下</et-button>
      </div>
      <code-wrap :code="content1" :tips="tips1"> </code-wrap>
    </div>

    <div class="code-example toast-example">
      <h3>自定义时间</h3>
      <div class="example">
        <et-button @click="showToast2('top')">提示向上</et-button>
        <et-button @click="showToast2('middle')">提示居中</et-button>
        <et-button @click="showToast2('bottom')">提示向下</et-button>
      </div>
      <code-wrap :code="content2" :tips="tips2"> </code-wrap>
    </div>

    <div class="code-example toast-example">
      <h3>可关闭提示</h3>
      <div class="example">
        <et-button @click="showToast3('top')">提示向上</et-button>
        <et-button @click="showToast3('middle')">提示居中</et-button>
        <et-button @click="showToast3('bottom')">提示向下</et-button>
      </div>
      <code-wrap :code="content3" :tips="tips3"> </code-wrap>
    </div>
  </div>
</template>

<script>
import Toast from "../../../src/components/Toast/toast";
import Button from "../../../src/components/Button/button";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-toast": Toast,
    "et-button": Button,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      content1: `
    <template>
      <et-button @click="showToast('top')">提示向上</et-button>
      <et-button @click="showToast('middle')">提示居中</et-button>
      <et-button @click="showToast('bottom')">提示向下</et-button>
    </template>
    <script>
      export default {
        methods: {
          showToast(position) {
            this.$toast("这是一条消息提示", {
              position,
            });
          },
        },
      }
    \<\/script>
    `,
      tips1: "使用<code>$toast</code>调出提示，<code>position</code>确定方位",
      content2: `
    <template>
      <et-button @click="showToast('top')">提示向上</et-button>
      <et-button @click="showToast('middle')">提示居中</et-button>
      <et-button @click="showToast('bottom')">提示向下</et-button>
    </template>
    <script>
      export default {
        methods: {
          showToast(position) {
            this.$toast("这是一条消息提示", {
              autoClose: 1,
              position,
            });
          },
        },
      }
    \<\/script>
    `,
      tips2:
        "使用<code>autoClose</code>设置提示显示的时间，<code>false</code>为不自动关闭",
      content3: `
    <template>
      <et-button @click="showToast('top')">提示向上</et-button>
      <et-button @click="showToast('middle')">提示居中</et-button>
      <et-button @click="showToast('bottom')">提示向下</et-button>
    </template>
    <script>
      export default {
        methods: {
          showToast(position) {
            this.$toast("这是一条消息提示", {
              closeButton: {
                text: "关闭",
                callback(toast) {
                  console.log(toast);
                },
              },
              autoClose: false,
              position,
            });
          },
        },
      }
    \<\/script>
    `,
      tips3: "使用<code>closeButton</code>设置关闭按钮",
    };
  },
  methods: {
    showToast1(position) {
      this.$toast("这是一条消息提示", {
        position,
      });
    },
    showToast2(position) {
      this.$toast("这是一条消息提示", {
        autoClose: 1,
        position,
      });
    },
    showToast3(position) {
      this.$toast("这是一条消息提示", {
        closeButton: {
          text: "关闭",
          callback(toast) {
            console.log(toast);
          },
        },
        autoClose: false,
        position,
      });
    },
  },
};
</script>

<style lang="scss" scope>
.toast-demos {
  .toast-example {
    button {
      margin-right: 20px;
    }
  }
}
</style>

