const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/Layout/row'
import Col from '../src/components/Layout/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在', () => {
        expect(Row).to.exist
    })
    it('接收 gutter 属性', (done) => {
        Vue.component('et-row', Row)
        Vue.component('et-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
            <et-row gutter="20">
                <et-col span="12"></et-col>
                <et-col span="12"></et-col>
            </et-row>
        `
        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })

    })
    it('接收 justify 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                justify: 'center'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('center')
        vm.$el.remove()
        vm.$destroy()
    })
})