// 收集依赖/收集订阅
class Dep {
  constructor() {
    // 这个 subs 数组，用来存放所有订阅者的信息

    this.subs = []
  }

  // 向 subs 数组中，添加订阅者的信息
  addSub(watcher) {
    this.subs.push(watcher)
  }

  // 发布通知的方法
  notify() {
    this.subs.forEach(watcher => {
      watcher.updata()
    })
  }
}

// 订阅者的类
class Watcher {
  constructor(cb) {
    this.cb = cb
  }
  // 触发回调的方法
  updata () {
    this.cb()
  }
}

const w1 = new Watcher(() => {
  console.log('我是第1个订阅者')
})

const w2 = new Watcher(() => {
  console.log('我是第2个订阅者')
})

const dep = new Dep 
dep.addSub(w1)
dep.addSub(w2)

// 只要我们为 vue 中 data 数据的重新赋值了，这个赋值的动作，会被 Vue 监听到
// 然后 vue 把数据的变化，通知到每一个订阅者！！！
// 接下来，订阅者（DOM元素）要根据最新的数据，更新自己的内容
dep.notify()