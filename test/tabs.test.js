// const expect = chai.expect;
// import Vue from 'vue'
// import Tabs from '../src/components/Tabs/tabs.vue'
// import TabsHead from "../src/components/Tabs/tabs-head.vue"
// import TabsBody from "../src/components/Tabs/tabs-body.vue"
// import TabsItem from "../src/components/Tabs/tabs-item.vue"
// import TabsPane from "../src/components/Tabs/tabs-pane.vue"

// Vue.component('et-tabs', Tabs)
// Vue.component('et-tabs-head', TabsHead)
// Vue.component('et-tabs-body', TabsBody)
// Vue.component('et-tabs-item', TabsItem)
// Vue.component('et-tabs-pane', TabsPane)

// Vue.config.productionTip = false
// Vue.config.devtools = false

// describe('TabsItem', () => {
//     it('存在', () => {
//         expect(TabsItem).to.exist
//     })
//     it('接收 name 属性', () => {
//         const Constructor = Vue.extend(TabsItem)
//         const vm = new Constructor({
//             propsData: {
//                 name: 'first'
//             }
//         }).$mount()
//         expect(vm.$el.getAttribute('data-name')).to.eq('first')
//     })
//     it('接收 disabled 属性', () => {
//         const Constructor = Vue.extend(TabsItem)
//         const vm = new Constructor({
//             propsData: {
//                 name: 'first',
//                 disabled: true
//             }
//         }).$mount()
//         expect(vm.$el.classList.contains('disabled')).to.be.true
//         const callback = sinon.fake();
//         vm.$on('click', callback);
//         vm.$el.click();
//         expect(callback).to.have.not.been.called
//     })
// })