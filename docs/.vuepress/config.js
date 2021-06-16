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
          "/components/icon", //图标
          "/components/button", //按钮
          "/components/input", //输入框
          "/components/layout", //布局
          "/components/container", //容器
          "/components/toast", //提示
          "/components/popover", //弹出层
          "/components/tabs", //标签页
          "/components/collapse", //折叠面板
          "/components/cascader", //级联选择器
          "/components/carousel", //轮播
          "/components/nav", //导航栏
          "/components/datePicker", //日期选择器
          "/components/pagination", //分页器
          "/components/table", //表格
        ],
        collapsable: false,
      },
    ],
    smoothScroll: true,
    lastUpdated: "最后更新时间", // string | boolean
  },
};
