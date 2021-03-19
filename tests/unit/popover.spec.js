import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Popover from "@/components/Popover/popover";

describe("Popover", () => {
  it("存在", () => {
    expect(Popover).to.exist;
  });

  it("可以设置position", () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>按钮</button>` },
        content: "这是我的内容",
      },
      propsData: {
        position: "bottom",
      },
    });
    wrapper.find("button").trigger("click");
    let classes = wrapper.find(".et-popover-wrapper").classes();
    expect(classes).to.include("position-bottom");
  });

  it("可以设置trigger", () => {
    const wrapper = mount(Popover, {
      slots: {
        default: { template: `<button>按钮</button>` },
        content: "这是我的内容",
      },
      propsData: {
        trigger: "hover",
      },
    });
    expect(wrapper.find(".et-popover-wrapper").element).to.not.exist;
    wrapper.find(".et-popover").trigger("mouseenter");
    expect(wrapper.find(".et-popover-wrapper").element).to.exist;
  });
});
