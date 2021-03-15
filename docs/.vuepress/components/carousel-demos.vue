<template>
  <div class="carousel-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-carousel :selected="selected">
          <et-carousel-item name="1"
            ><div class="box">轮播1</div></et-carousel-item
          >
          <et-carousel-item name="2"
            ><div class="box">轮播2</div></et-carousel-item
          >
          <et-carousel-item name="3"
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
      selected: "1",
      content1: "",
    };
  },
  created() {
    let n = 1;
    setInterval(() => {
      if (n === 4) {
        n = 1;
      }
      this.selected = n.toString();
      n++;
    }, 2000);
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.carousel-demos {
  .box {
    border: 1px solid red;
    width: 200px;
    height: 150px;
    background: #ddd;
  }
}
</style>
