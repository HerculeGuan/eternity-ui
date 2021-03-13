const path = require("path");
module.exports = {
  base: "/vue-wheel/",
  title: "Eternity UI",
  description: "Vue UI 组件库",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "Github", link: "https://github.com/HerculeGuan/vue-wheel" },
    ],
    sidebar: [
      {
        title: "开发指南",
        children: ["/install/", "/get-started/"],
        collapsable: false,
      },
      {
        title: "组件",
        children: [
          "/components/icon",
          "/components/button",
          "/components/input",
          "/components/layout",
          "/components/container",
          "/components/toast",
          // '/components/popover',
          "/components/tabs",
          "/components/collapse",
          "/components/cascader",
        ],
        collapsable: false,
      },
    ],
    smoothScroll: true,
    lastUpdated: "最后更新时间", // string | boolean
  },
};
