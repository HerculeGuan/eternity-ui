
let callbacks = []
let onClickDocument = (e) => {
    let { target } = e
    callbacks.forEach(item => {
        if (target === item.el || item.el.contains(target)) {
            return
        }
        item.callback()
    })
}
document.addEventListener('click', onClickDocument)

export default {
    bind: (el, binding, vnode) => {
        callbacks.push({ el, callback: binding.value })
    },
}

let removeListener = () => {
    document.removeEventListener('click', onClickDocument)
}

export { removeListener }