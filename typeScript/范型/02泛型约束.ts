// function identity<T>(arg: T): T {
//   console.log(arg.length) // 类型“T”上不存在属性“length”。ts(2339)
//   return arg
// }

interface Length {
  length: number;
}

function identity<T extends Length>(arg: T): T {
  console.log(arg.length); // 可以获取length属性
  return arg;
}

identity('abc')
// identity(111) // 类型“number”的参数不能赋给类型“Length”的参数。ts(2345)

export {}