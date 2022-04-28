#  Vue3 + TS组件传值（`defineProps`、 `defineEmits`）

`script setup>` 中必须使用 `defineProps` 和 `defineEmits` API 来声明 `props` 和 `emits` ，它们具备完整的类型推断并且在 `<script setup>` 中是直接可用的：

### 父组件

``` vue
<template>
  <div>
    <Child
      :msg="'传递的值'"  // 传值
      @change="change"  // 调用子组件方法
    />
  </div>
</template>

<script setup lang="ts">
const change = (val: number) => {
  console.log(val)
}
</script>
```

### 子组件

```ts
// 1.接收父组件传值
const props = defineProps<{
  foo: string
  bar?: number
}>()

// 2.想要设置默认值，通过 withDefaults 编译器宏
interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})

console.log(props.msg)  // hello
```

``` ts
// 抛出事件
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

const click = () => {
  emit('change', 1)  
  emit('update', 'abc')
}

```

```js
// 非ts
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
```

