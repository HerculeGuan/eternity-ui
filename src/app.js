import Vue from "vue";
import Button from "./components/Button/button.vue"
import Icon from "./components/Icon/icon.vue"
import ButtonGroup from "./components/Button/button-group.vue"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)

new Vue({
    el:"#app",
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
    }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    const button = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-setting')
}