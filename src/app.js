import Vue from "vue";
import Button from "./components/Button/button.vue"
import Icon from "./components/Icon/icon.vue"
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

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-container', Container)
Vue.component('g-header', Header)
Vue.component('g-sider', Sider)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-toast', Toast)
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
        showToast() {
            this.$toast('<em>消息</em>',
                {
                    closeButton: {
                        text: '关闭',
                        callback(toast) {
                            console.log(toast)
                        },
                    },
                    enableHtml: true
                }
            )
        },

        // inputChange(e) {
        //     console.log(e);
        // }
    },
})
