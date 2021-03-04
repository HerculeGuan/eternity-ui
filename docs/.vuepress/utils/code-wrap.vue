<template>
  <div class="code-wrap" v-highlight>
    <pre><code>{{ code }}</code></pre>
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
  pre {
    padding: 0;
    background-color: #fafafa !important;

    code {
      color: #000;
    }
  }
}
</style>
