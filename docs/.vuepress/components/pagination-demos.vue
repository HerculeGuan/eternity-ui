<template>
  <div class="carousel-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-pagination :total="20" :current-page="3"></et-pagination>
      </div>
      <!-- <code-wrap :code="content1" :tips="tips1"></code-wrap> -->
    </div>
  </div>
</template>

<script>
import Pagination from "../../../src/components/Pagination/pagination";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-pagination": Pagination,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      selected1: "first",
      selected2: "first",
      selected3: "first",
      content1: `
    <template>
      <et-carousel :selected.sync="selected">
        <et-carousel-item name="first"><div>轮播1</div></et-carousel-item>
        <et-carousel-item name="second"><div>轮播2</div></et-carousel-item>
        <et-carousel-item name="third"><div>轮播3</div></et-carousel-item>
      </et-carousel>
    </template>
    <script>
      export default {
        data() {
          return {
            selected: "first"
          }
        },
      }
    \<\/script>
      `,
      tips1: "使用<code>selected.sync</code>动态绑定当前轮播的值",
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
