import Vue from "vue";
import Button from "./components/Button/button.vue"
import Icon from "./components/Icon/icon.vue"
import ButtonGroup from "./components/Button/button-group.vue"
import Input from "./components/Input/input.vue"
import Row from "./components/Layout/row.vue"
import Col from "./components/Layout/col.vue"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)

new Vue({
    el:"#app",
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        inputValue:"输入框",
    },
    methods:{
        inputChange(e){
            console.log(e);
        }
    }
})
