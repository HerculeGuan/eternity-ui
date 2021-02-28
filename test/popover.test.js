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
            <et-popover position="bottom" ref="a">
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
            const { contentWrapper } = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        })
    })
    // it('点击 button 触发 click 事件', () => {
    //     const Constructor = Vue.extend(Button)
    //     const vm = new Constructor({
    //         propsData: {
    //             icon: 'setting',
    //         }
    //     }).$mount()

    //     const callback = sinon.fake();
    //     vm.$on('click', callback)
    //     vm.$el.click()
    //     expect(callback).to.have.been.called

    // })
})