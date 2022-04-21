## Pinia 状态管理工具
***
### 1.定义容器
``` typescript
export const userMainStore = defineStore('main', {
    /**
     * 1. 类似于组件的 data，用来存储全局状态的
     * 2. 必须是箭头函数，这是为了更好的 TS 类型推导
     */
    state: () => {
        return { 
            count: 100
        }
    },

    /**
     * 类似干组件的computéd,用来封装计算属性.有缓存的功能
     */
    getters: {
        getCount (state) {
            console.log(111);
            
            return state.count + 10
        }
    },

    /**
     * 类以于组件的methods,封装业务逻辑，修改state
     */
    actions: {
        changeCount (num: number) {
            this.count += num
        }
    }
})
```

### 2.获取数据
```typescript


import { userMainStore } from '@/store/index'
import { storeToRefs } from "pinia";

const userData = userMainStore()

// 结构赋值必须通过 storeToRefs 获取，绑定了ref 才能响应式
const {count} = storeToRefs(userData)
```
```html
<template>
<!-- 1.直接调用 -->
{{userData.count}}

<!-- 1.结构赋值 -->
{{count}}

<!-- 1.通过调用getter方法 注意：getter具有缓存性，类似于computed计算属性 -->
{{userData.getCount}}
</template>
```

### 3.修改数据
```typescript
// 1.直接修改
userData.count++

// 2.批量修改时使用，性能要好，只渲染一次
userData.$patch(state => {
  state.count++
})

// 3.处理比较复杂的逻辑时，调用action方法，可以传值, 在aciton里面可以调用异步请求
userData.changeCount(10)
```