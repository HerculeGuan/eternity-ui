# eternity-ui —— Vue UI 组件库

[![Build Status](https://travis-ci.org/HerculeGuan/eternity-ui.svg?branch=main)](https://travis-ci.org/HerculeGuan/eternity-ui)

## 介绍

使用 Vue.js 的 Web 端 UI 组件库 (持续更新中)

## 文档

[点击此处查看文档](https://herculeguan.github.io/eternity-ui/)

## 开始使用

#### 安装 eternity-ui

```
npm i eternity-ui
```

#### 快速开始

```
import "eternity-ui/dist/eternity.css";
import {Button,ButtonGroup} from 'eternity-ui'

export default {
   name: 'app',
   components: {
      HelloWorld,
      'et-button': Button,
      ...
   }
}
```

#### 开启样式

使用本框架前请在 CSS 中开启 border-box

```
*,*::before,*::after{box-sizing: border-box;}
```

## 兼容性

IE 8 及以上浏览器都支持此样式

## 联系方式

email: sherlock_guan@163.com

## 变更记录
