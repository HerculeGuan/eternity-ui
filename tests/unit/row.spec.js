import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Col from "@/components/Layout/col";
import Row from "@/components/Layout/row";

describe("Row", () => {
  it("存在", () => {
    expect(Row).to.exist;
  });

  // it("接收 gutter 属性", () => {
  //   Vue.component("et-row", Row);
  //   Vue.component("et-col", Col);
  //   const div = document.createElement("div");
  //   document.body.appendChild(div);
  //   div.innerHTML = `
  //           <et-row gutter="20">
  //               <et-col span="12"></et-col>
  //               <et-col span="12"></et-col>
  //           </et-row>
  //       `;
  //   const vm = new Vue({
  //     el: div,
  //   });
  //   setTimeout(() => {
  //     const row = vm.$el.querySelector(".row");
  //     expect(getComputedStyle(row).marginLeft).to.eq("-10px");
  //     expect(getComputedStyle(row).marginRight).to.eq("-10px");
  //     const cols = vm.$el.querySelectorAll(".col");
  //     expect(getComputedStyle(cols[0]).paddingLeft).to.eq("10px");
  //     expect(getComputedStyle(cols[1]).paddingRight).to.eq("10px");
  //     done();
  //     vm.$el.remove();
  //     vm.$destroy();
  //   });
  // });

  xit("接收 justify 属性", () => {
    const wrapper = mount(Row, {
      propsData: {
        justify: "center",
      },
    });
    expect(getComputedStyle(wrapper.element).justifyContent).to.equal("center");
  });
});
