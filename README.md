# eternity-ui —— Vue UI 组件库

[![Build Status](https://travis-ci.org/HerculeGuan/vue-wheel.svg?branch=main)](https://travis-ci.org/HerculeGuan/vue-wheel)

## 介绍

使用 Vue.js 的 Web 端 UI 组件库 (持续更新中)

## 开始使用

1. CSS 样式

   使用本框架前请在 CSS 中开启 border-box

   ```
   *,*::before,*::after{box-sizing: border-box;}
   ```

   IE 8 及以上浏览器都支持此样式

   你还需设置默认变量

   ```
   html {
      --button-height: 28px;
      --font-size: 14px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
   }
   ```

2. 安装 eternity-ui

   ```
   npm i eternity-ui
   ```

3. 引入 eternity-ui

   ```
   import {Button,ButtonGroup,Icon} from 'eternity-ui'
   import 'eternity-ui/dist/index.css'

   export default {
      name: 'app',
      components: {
         HelloWorld,
         'et-button': Button,
         ...
      }
   }
   ```


IE 15 及以上浏览器都支持此样式

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献记录
