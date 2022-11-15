const obj = {
    name: 'Lowrie',
}

const proxyObj = new Proxy(obj, {
    get(target, key, receiver) {
        console.log(target, key, receiver, '获取');
        return target[key]
    },
    set(target, key, newVal, receiver) {
        console.log(target, key, newVal, receiver, '修改');
        target[key] = newVal
    },
    has(target, key) {
        console.log(`监听到对象的in操作符`, target)
        return key in target
    },
    deleteProperty(target, key) {
        console.log(`监听到对象的delete操作符`, target)
        delete target[key]
    },
})

delete proxyObj.name
// console.log();
console.log(obj);