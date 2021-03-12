import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
chai.use(sinonChai);

import Toast from "@/components/Toast/toast";

describe("Toast", () => {
  it("存在", () => {
    expect(Toast).to.exist;
  });

  describe("props", () => {
    it("接收 autoClose 属性", () => {
      const wrapper = mount(Toast, {
        propsData: {
          autoClose: 1,
        },
      });
      wrapper.vm.$on("close", () => {
        expect(document.body.contains(wrapper.element)).to.eq(false);
      });
    });

    it("接收 closeButton 属性", () => {
      const callback = sinon.fake();
      const wrapper = mount(Toast, {
        propsData: {
          closeButton: {
            text: "关闭",
            callback,
          },
        },
      });
      const buttonWrapper = wrapper.find(".close");
      expect(buttonWrapper.text()).to.equal("关闭");
      wrapper.vm.$nextTick(() => {
        buttonWrapper.trigger("click");
        expect(callback).to.have.been.called;
      });
    });

    xit("接收 enableHtml 属性", () => {
      const wrapper = mount(Toast, {
        slots: {
          default: {
            template: `<em id="test">提示</em>`,
          },
        },
        propsData: {
          enableHtml: true,
        },
      });
      const textElement = wrapper.find("#test");
      expect(textElement).to.exist;
    });

    it("接收 position 属性", () => {
      const wrapper = mount(Toast, {
        propsData: {
          position: "bottom",
        },
      });
      expect(wrapper.classes().includes("position-bottom"));
    });
  });
});
