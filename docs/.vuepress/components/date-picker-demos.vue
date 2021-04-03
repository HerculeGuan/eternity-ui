<template>
  <div class="date-picker-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <p>aaa</p>
      <div class="example">
        <et-date-picker v-model="value"></et-date-picker>
      </div>
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>
  </div>
</template>

<script>
import DatePicker from "../../../src/components/DatePicker/date-picker";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-date-picker": DatePicker,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      value: new Date(),
      content1: `

    `,
      tips1: " ",
    };
  },
  methods: {},
};
</script>
