import chai, { expect } from "chai";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import { mount } from "@vue/test-utils";
chai.use(sinonChai);

import TabsItem from "@/components/Tabs/tabs-item.vue";

describe("TabsItem", () => {
  it("存在", () => {
    expect(TabsItem).to.exist;
  });

  xit("接收 name 属性", () => {
    const wrapper = mount(TabsItem, {
      propsData: {
        name: "first",
      },
      inject: ["eventBus"],
    });
    expect(wrapper.attributes("data-name")).to.be.equal("first");
  });

  xit("接收 disabled 属性", () => {
    const wrapper = mount(TabsItem, {
      propsData: {
        name: "first",
        disabled: true,
      },
    });
    expect(wrapper.classes()).include("disabled");

    const callback = sinon.fake();
    wrapper.vm.$on("click", callback);
    wrapper.trigger("click");
    expect(callback).to.have.not.been.called;
  });
});
