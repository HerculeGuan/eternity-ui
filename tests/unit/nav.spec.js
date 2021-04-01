import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
import Vue from "vue";
chai.use(sinonChai);

import Nav from "@/components/Nav/nav";
import NavItem from "@/components/Nav/nav-item";
import Subnav from "@/components/Nav/subnav";

describe("Nav", () => {
  it("存在", () => {
    expect(Nav).to.exist;
  });

  it("接收 selected 属性", () => {
    Vue.component("et-nav-item", NavItem);
    Vue.component("et-subnav", Subnav);

    const wrapper = mount(Nav, {
      propsData: {
        selected: "home",
      },
      slots: {
        default: `
        <et-nav-item name="home">首页</et-nav-item>
        <et-nav-item name="content">内容</et-nav-item>
            `,
      },
    });
    setTimeout(() => {
      expect(wrapper.find("[data-name='home'].selected").exists()).to.be.true;
    }, 0);
  });
  it("可以触发 update:selected", () => {
    Vue.component("et-nav-item", NavItem);
    Vue.component("et-subnav", Subnav);
    const callback = sinon.fake();

    const wrapper = mount(Nav, {
      propsData: {},
      slots: {
        default: `
        <et-nav-item name="home">首页</et-nav-item>
        <et-nav-item name="content">内容</et-nav-item>
            `,
      },
      listeners: {
        "update:selected": callback,
      },
    });

    wrapper.find("[data-name='content']").trigger("click");
    expect(callback).to.have.been.calledWith("content");
  });
});
