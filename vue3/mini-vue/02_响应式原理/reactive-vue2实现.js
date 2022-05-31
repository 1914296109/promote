class Dep {
  constructor() {
    // 创建一个依赖集合
    this.subscribers = new Set();
  }

  // 添加依赖
  depend() {
    if (activeEffect) {
      this.subscribers.add(activeEffect);
    }
  }

  // 通知
  notify() {
    this.subscribers.forEach((effect) => effect());
  }
}

let activeEffect = null;
function watchEffect(Effect) {
  activeEffect = Effect;
  //   dep.depend();
  Effect();
  activeEffect = null;
}

// Map({key: value}): key是一个字符串
// WeakMap({key(对象): value}): key是一个对象，弱引用
const targetMap = new WeakMap();
function getDep(target, key) {
  // 根据对象(target)取出对应的 Map 对象
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 2. 取出具体的 dep 对象
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }
  return dep;
}

// vue2 对 raw 进行数据劫持
function reactive(raw) {
  Object.keys(raw).forEach((key) => {
    const dep = getDep(raw, key); 
    let value = raw[key];
    Object.defineProperty(raw, key, {
      get() {
        dep.depend();
        return value
      },
      set(newValue) {
        if (newValue !== value) {
          value = newValue;
          dep.notify();
        }
      },
    });
  });
  return raw;
}

const info = reactive({ count: 100, age: 18 });
const foo = reactive({ height: 1.88 });

watchEffect(function () {
  console.log('1', info.count * 2, info.age);
});

watchEffect(function () {
  console.log('2', info.count * info.count);
});

console.log(info.count);
info.count = 10
// dep.notify();
