const obj = {
  name: 'zs',
  age: 20
}

Object.defineProperty(obj,'name',{
  enumerable: true, // 当前属性，允许被循环
  configurable: true, // 当前属性，允许被配置 delete
  get () { // getter
    console.log('有人获取了 obj.name 的值')
    return '我不是zs'
  },
  set (newVal) { // setter
    console.log('我被改变啦', newVal)
    dep.notify()
  }
})

// console.log(obj.name)
obj.name = 1
