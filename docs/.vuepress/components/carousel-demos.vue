<template>
  <div class="carousel-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-carousel :selected.sync="selected">
          <et-carousel-item name="first"
            ><div class="box">轮播1</div></et-carousel-item
          >
          <et-carousel-item name="second"
            ><div class="box">轮播2</div></et-carousel-item
          >
          <et-carousel-item name="third"
            ><div class="box">轮播3</div></et-carousel-item
          >
        </et-carousel>
      </div>

      <code-wrap :code="content1"></code-wrap>
    </div>
  </div>
</template>

<script>
import Carousel from "../../../src/components/Carousel/carousel";
import CarouselItem from "../../../src/components/Carousel/carousel-item";
import CodeWrap from "../utils/code-wrap";
import "../style/common.scss";

export default {
  components: {
    "et-carousel": Carousel,
    "et-carousel-item": CarouselItem,
    "code-wrap": CodeWrap,
  },
  data() {
    return {
      selected: "first",
      content1: "",
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.carousel-demos {
  .box {
    width: 100%;
    height: 200px;
    background: rgb(0, 162, 255);
  }
}
</style>
