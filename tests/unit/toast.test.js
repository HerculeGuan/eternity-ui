const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/Toast/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在', () => {
        expect(Toast).to.exist
    })
    describe('props', function () {
        it('接收 autoClose 属性', (done) => {
            const div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: 1,
                }
            }).$mount(div)
            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
                vm.$el.remove()
                vm.$destroy()
            })

        })
        it('接收 closeButton 属性', () => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback,
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.innerText.trim()).to.eq('关闭')
            vm.$nextTick(() => {
                closeButton.click()
                expect(callback).to.have.been.called
                vm.$destroy()
            })
        })
        it('接收 enableHtml 属性', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<em id="test">提示</em>']
            vm.$mount()
            let strong = vm.$el.querySelector('#test')
            expect(strong).to.exist
        })
        it('接收 position 属性', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'bottom',
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
        })

    })

})