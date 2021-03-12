import { expect } from "chai";
import { mount } from "@vue/test-utils";

import Tabs from "@/components/Tabs/tabs.vue";

describe("Tabs", () => {
  it("存在", () => {
    expect(Tabs).to.exist;
  });
});
