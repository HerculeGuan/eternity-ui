import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
chai.use(sinonChai);

import Input from "@/components/Input/input";

describe("Input", () => {
  it("存在", () => {
    expect(Input).to.exist;
  });

  describe("props", () => {
    it("可以接收 value", () => {
      const wrapper = mount(Input, {
        propsData: {
          value: "输入",
        },
      });
      const inputElement = wrapper.find("input").element;
      expect(inputElement.value).to.equal("输入");
    });

    it("可以接收 disabled", () => {
      const wrapper = mount(Input, {
        propsData: {
          disabled: true,
        },
      });
      const inputElement = wrapper.find("input").element;
      expect(inputElement.disabled).to.equal(true);
    });

    it("可以接收 readonly", () => {
      const wrapper = mount(Input, {
        propsData: {
          readonly: true,
        },
      });
      const inputElement = wrapper.find("input").element;
      expect(inputElement.readOnly).to.equal(true);
    });

    it("可以接收 error", () => {
      const wrapper = mount(Input, {
        propsData: {
          error: "错误",
        },
      });
      const useWrapper = wrapper.find("use");
      expect(useWrapper.attributes("href")).to.equal("#i-error");
      const msgWrapper = wrapper.find(".error-msg");
      expect(msgWrapper.text()).to.equal("错误");
    });
  });

  describe("事件", () => {
    it("支持 change/input/focus/blur 事件", () => {
      ["change", "input", "focus", "blur"].forEach((eventName) => {
        const wrapper = mount(Input);
        const callback = sinon.fake();
        wrapper.vm.$on(eventName, callback);

        //触发事件1
        wrapper.find("input").trigger(eventName);
        expect(callback).to.have.been.called;

        //触发事件2
        let event = new Event(eventName);
        Object.defineProperty(event, "target", { value: { value: "hi" } });
        const inputElement = wrapper.find("input").element;
        inputElement.dispatchEvent(event);
        expect(callback).to.have.been.calledWith("hi");
      });
    });
  });
});
