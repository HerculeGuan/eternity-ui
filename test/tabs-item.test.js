const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/components/Tabs/tabs'
import TabsHead from "../src/components/Tabs/tabs-head.vue"
import TabsBody from "../src/components/Tabs/tabs-body.vue"
import TabsItem from "../src/components/Tabs/tabs-item.vue"
import TabsPane from "../src/components/Tabs/tabs-pane.vue"

Vue.component('et-tabs', Tabs)
Vue.component('et-tabs-head', TabsHead)
Vue.component('et-tabs-body', TabsBody)
Vue.component('et-tabs-item', TabsItem)
Vue.component('et-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
    it('存在', () => {
        expect(Tabs).to.exist
    })
    it('接收 select 属性', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <et-tabs selected="second">
            <et-tabs-head>
                <et-tabs-item name="first">head1</et-tabs-item>
                <et-tabs-item name="second">head2</et-tabs-item>
                <et-tabs-item name="third">head3</et-tabs-item>
            </et-tabs-head>
            <et-tabs-body>
                <et-tabs-pane name="first">第一个body</et-tabs-pane>
                <et-tabs-pane name="second">第二个body</et-tabs-pane>
                <et-tabs-pane name="third">第三个body</et-tabs-pane>
            </et-tabs-body>
        </et-tabs>
        `
        const vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let tabItem = vm.$el.querySelector('.tabs-item[data-name="second"]')
            expect(tabItem.classList.contains('active')).to.be.true
            done()
        })
    })
})