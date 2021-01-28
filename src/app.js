import Vue from "vue";
import Button from "./components/Button/button.vue"
import Icon from "./components/Icon/icon.vue"
import ButtonGroup from "./components/Button/button-group.vue"
import Input from "./components/Input/input.vue"

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)

new Vue({
    el:"#app",
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
    },
    methods:{
        inputChange(e){
            console.log(e);
        }
    }
})
