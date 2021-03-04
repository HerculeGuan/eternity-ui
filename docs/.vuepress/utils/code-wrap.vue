<template>
  <div class="code-wrap" v-highlight>
    <pre><code>{{ formatCode }}</code></pre>
  </div>
</template>
===
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
  padding: 20px;
  background-color: #fafafa;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  pre {
    padding: 0;
    margin: 0;
    code {
      color: #000;
      background-color: #fafafa;
    }
  }
}
</style>
