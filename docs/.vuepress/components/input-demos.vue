<template>
  <div class="input-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-input v-model="input1" placeholder="请输入内容" />
      </div>
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>禁用输入框</h3>
      <div class="example">
        <et-input v-model="input2" placeholder="请输入内容" disabled />
      </div>
      <code-wrap :code="content2" :tips="tips2"></code-wrap>
    </div>

    <div class="code-example">
      <h3>只读输入框</h3>
      <div class="example">
        <et-input v-model="input3" placeholder="请输入内容" readonly />
      </div>
      <code-wrap :code="content3" :tips="tips3"></code-wrap>
    </div>

    <div class="code-example">
      <h3>报错输入框</h3>
      <div class="example">
        <et-input v-model="input4" placeholder="请输入内容" error="报错了" />
      </div>
      <code-wrap :code="content4" :tips="tips4"></code-wrap>
    </div>
  </div>
</template>

<script>
import Input from "../../../src/components/Input/input";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-input": Input,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      error: "报错了",

      content1: `
    <template>
      <et-input v-model="input" placeholder="请输入内容" />
    </template>

    <script>
      export default {
        data() {
          return {
            input: ''
          }
        }
      }
    \<\/script>
    `,
      tips1: "使用<code>v-model</code>双向绑定输入框的值",
      content2: `
    <template>
      <et-input v-model="disabledInput" placeholder="请输入内容" disabled />
    </template>

    <script>
      export default {
        data() {
          return {
            input: ''
          }
        }
      }
    \<\/script>
    `,
      tips2: "使用<code>disabled</code>属性禁用输入框",
      content3: `
    <template>
      <et-input v-model="disabledInput" placeholder="请输入内容" readonly />
    </template>

    <script>
      export default {
        data() {
          return {
            input: ''
          }
        }
      }
    \<\/script>
    `,
      tips3: "使用<code>readonly</code>属性只读输入框",
      content4: `
    <template>
      <et-input v-model="disabledInput" placeholder="请输入内容" :error="error" />
    </template>

    <script>
      export default {
        data() {
          return {
            input: '',
            error: '报错了'
          }
        }
      }
    \<\/script>
    `,
      tips4: "使用<code>error</code>属性指定报错内容",
    };
  },
};
</script>
<style lang="scss">
.input-demos {
  .et-input {
    width: 180px;
  }
}
</style>
