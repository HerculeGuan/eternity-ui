import Vue from "vue";
import Icon from "./components/Icon/icon.vue"
import Button from "./components/Button/button.vue"
import ButtonGroup from "./components/Button/button-group.vue"
import Input from "./components/Input/input.vue"
import Row from "./components/Layout/row.vue"
import Col from "./components/Layout/col.vue"

import Container from "./components/Container/container.vue"
import Header from "./components/Container/header.vue"
import Sider from "./components/Container/sider.vue"
import Content from "./components/Container/content.vue"
import Footer from "./components/Container/footer.vue"

import Toast from "./components/Toast/toast.vue"
import plugin from "./plugin"

Vue.component('et-icon', Icon)
Vue.component('et-button', Button)
Vue.component('et-button-group', ButtonGroup)
Vue.component('et-input', Input)
Vue.component('et-row', Row)
Vue.component('et-col', Col)
Vue.component('et-container', Container)
Vue.component('et-header', Header)
Vue.component('et-sider', Sider)
Vue.component('et-content', Content)
Vue.component('et-footer', Footer)
Vue.component('et-toast', Toast)
Vue.use(plugin)


new Vue({
    el: "#app",
    data: {
        loading1: false,
        loading2: false,
        loading3: false,
        inputValue: "输入框",
    },
    methods: {
        showToast(position) {
            this.$toast(`消息${parseInt(Math.random(0, 100) * 100)}`,
                {
                    closeButton: {
                        text: '关闭',
                        callback(toast) {
                            console.log(toast)
                        },
                    },
                    enableHtml: true,
                    autoClose: 3,
                    position
                }
            )
        }
    },
})
