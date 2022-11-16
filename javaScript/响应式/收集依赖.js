// 全局收集的依赖函数
let globalFn = null

class Depend {
    constructor() {
        // 相同的函树更新一次 即可  Set防重
        this.collectDependList = new Set()
    }
    // 添加依赖
    // appendDepend(fn) {
    //     this.collectDependList.push(fn)
    // }
    depend() {
        if (globalFn) {
            this.collectDependList.add(globalFn)
        }
    }
    // 通知
    notify() {
        this.collectDependList.forEach(item => {
            item()
        })
    }
}


// 获取 depend 函数  
// weakMap(obj,map) => weakMap.get(obj) => map(key,depend) => map.get(key) => depend
const targetMap = new WeakMap()
function getDpend(target, key) {
    let map = targetMap.get(target)
    if (!map) {
        map = new Map()
        targetMap.set(target, map)
    }

    let depend = map.get(key)
    if (!depend) {
        depend = new Depend()
        map.set(key, depend)
    }
    return depend
}

function reactive(obj) {
    return new Proxy(obj, {
        get(target, key, receiver) {
            const depend = getDpend(target, key)
            // depend.appendDepend(globalFn)
            depend.depend()
            return Reflect.get(target, key, receiver)
        },

        set(target, key, newValue, receiver) {
            Reflect.set(target, key, newValue, receiver)
            const depend = getDpend(target, key)
            depend.notify()
        },
    })
}

const obj = {
    name: 'Lowrie',
    age: 18
}

const proxyObj = reactive(obj)

function watchFn(fn) {
    globalFn = fn
    fn()
    globalFn = null
}

watchFn(function () {
    console.log(proxyObj.name, '打印名字');
})

watchFn(function () {
    console.log(proxyObj.age, '打印年龄');
    console.log(proxyObj.age, '打印年龄');
})


console.log('------------------修改后');
// proxyObj.name = 'Dabai'
proxyObj.age = 19

