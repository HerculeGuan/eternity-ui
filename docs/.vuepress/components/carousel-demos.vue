<template>
  <div class="carousel-demos">
    <div class="code-example">
      <h3>基础用法</h3>
      <div class="example">
        <et-carousel :selected.sync="selected1">
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
      <code-wrap :code="content1" :tips="tips1"></code-wrap>
    </div>

    <div class="code-example">
      <h3>hover触发</h3>
      <p>鼠标浮动来切换上下显示</p>
      <div class="example">
        <et-carousel :selected.sync="selected2" trigger="hover">
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
      <code-wrap :code="content2" :tips="tips2"></code-wrap>
    </div>

    <div class="code-example">
      <h3>自定义播放</h3>
      <p>可以自定义轮播的时间和方向</p>
      <div class="example">
        <et-carousel
          :selected.sync="selected3"
          play-reverse
          :auto-play-delay="500"
        >
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
      <code-wrap :code="content3" :tips="tips3"></code-wrap>
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
      content2: `
    <template>
      <et-carousel :selected.sync="selected" trigger="hover">
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
      tips2: "使用<code>trigger</code>设置轮播触发方式，默认是点击触发",
      content3: `
    <template>
      <et-carousel :selected.sync="selected" play-reverse :auto-play-delay="500">
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
      tips3:
        "使用<code>play-reverse</code>设置轮播方向，<code>auto-play-delay</code>设置轮播间隔时间",
    };
  },
  created() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.carousel-demos {
  .box {
    height: 250px;
    background: rgb(0, 162, 255);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    color: white;
  }
}
</style>
