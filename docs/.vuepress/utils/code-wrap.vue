<template>
  <div class="code-wrap">
    <div class="tips" v-if="tips" v-html="tips"></div>
    <div class="code" v-highlight>
      <pre><code>{{ formatCode }}</code></pre>
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";
// import "highlight.js/styles/qtcreator_light.css";
// import "highlight.js/styles/kimbie.light.css";
// import "highlight.js/styles/atelier-seaside-light.css";
// import "highlight.js/styles/gradient-light.css";
import "highlight.js/styles/hopscotch.css";

export default {
  name: "CodeWrap",
  props: {
    code: {
      type: String,
      required: true,
    },
    tips: {
      type: String,
    },
  },
  computed: {
    formatCode() {
      return this.code.replace(/^ {4}/gm, "").trim();
    },
  },
  data() {
    return {};
  },
  directives: {
    highlight: {
      inserted: function(el) {
        let blocks = el.querySelectorAll("pre code");
        blocks.forEach((block) => {
          hljs.highlightBlock(block);
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.code-wrap {
  border: 1px solid #ebebeb;
  border-top: none;
  background-color: #fafafa;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  .tips {
    font-size: 14px;
    padding: 10px 20px;
    background-color: #fff;
  }
  .code {
    padding: 20px;

    pre {
      padding: 0;
      margin: 0;
      code {
        color: #000;
        background-color: #fafafa;
      }
    }
  }
}
</style>
