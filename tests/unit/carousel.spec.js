import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
chai.use(sinonChai);

import Carousel from "@/components/Carousel/carousel";
import CarouselItem from "@/components/Carousel/carousel-item";
import Vue from "vue";
describe("Carousel", () => {
  it("存在", () => {
    expect(Carousel).to.exist;
  });

  it("可以接受 EtCarouselItem, 默认显示第一个", () => {
    Vue.component("et-carousel-item", CarouselItem);
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false,
      },
      slots: {
        default: `
        <et-carousel-item name="first"
        ><div class="first">轮播1</div></et-carousel-item
      >
      <et-carousel-item name="second"
        ><div class="second">轮播2</div></et-carousel-item
      >
      <et-carousel-item name="third"
        ><div class="third">轮播3</div></et-carousel-item
      >
        `,
      },
    });
    setTimeout(() => {
      expect(wrapper.find(".first").exists()).to.be.true;
    }, 0);
  });

  it("选中selected的那一项", () => {
    Vue.component("et-carousel-item", CarouselItem);
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false,
        selected: "second",
      },
      slots: {
        default: `
        <et-carousel-item name="first"
        ><div class="first">轮播1</div></et-carousel-item
      >
      <et-carousel-item name="second"
        ><div class="second">轮播2</div></et-carousel-item
      >
      <et-carousel-item name="third"
        ><div class="third">轮播3</div></et-carousel-item
      >
        `,
      },
    });
    setTimeout(() => {
      expect(wrapper.find(".second").exists()).to.be.true;
    }, 0);
  });

  it("点击第二个就展示第二个", () => {
    Vue.component("et-carousel-item", CarouselItem);
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlay: false,
        selected: "first",
      },
      slots: {
        default: `
        <et-carousel-item name="first"
        ><div class="first">轮播1</div></et-carousel-item
      >
      <et-carousel-item name="second"
        ><div class="second">轮播2</div></et-carousel-item
      >
      <et-carousel-item name="third"
        ><div class="third">轮播3</div></et-carousel-item
      >
        `,
      },
      listeners: {
        "update:selected": (x) => {
          expect(x).to.equal("second");
        },
      },
    });
    setTimeout(() => {
      wrapper.find("[data-index='2']").trigger("click");
    }, 0);
  });

  it("可以自动播放", () => {
    Vue.component("et-carousel-item", CarouselItem);
    const callback = sinon.fake();
    const wrapper = mount(Carousel, {
      propsData: {
        autoPlayDelay: 500,
      },
      slots: {
        default: `
        <et-carousel-item name="first"
        ><div class="first">轮播1</div></et-carousel-item
      >
      <et-carousel-item name="second"
        ><div class="second">轮播2</div></et-carousel-item
      >
      <et-carousel-item name="third"
        ><div class="third">轮播3</div></et-carousel-item
      >
        `,
      },
      listeners: {
        "update:selected": callback,
      },
    });
    setTimeout(() => {
      expect(callback).to.have.been.called;
      expect(callback).to.have.been.calledWith('second')
    }, 500);
  });
});
