const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/components/Popover/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在', () => {
        expect(Popover).to.exist
    })
    it('可以设置position', (done) => {
        Vue.component('et-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <et-popover position="bottom" ref="testRef">
            <template v-slot:content>
                <div class="">这是我的内容</div>
            </template>
            <button>按钮</button>
            </et-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const { contentWrapper } = vm.$refs.testRef.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
    })
    xit('可以设置trigger', (done) => {
        Vue.component('et-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <et-popover trigger="hover" ref="testRef">
            <template v-slot:content>
                <div class="">这是我的内容</div>
            </template>
            <button>按钮</button>
            </et-popover>
        `
        const vm = new Vue({
            el: div
        })
        // 触发事件
        vm.$nextTick(() => {
            let event = new Event('mouseenter');
            vm.$el.dispatchEvent(event)
            vm.$nextTick(() => {
                const { contentWrapper } = vm.$refs.testRef.$refs
                expect(contentWrapper).to.exist
                done()
            })
        })

    })
})