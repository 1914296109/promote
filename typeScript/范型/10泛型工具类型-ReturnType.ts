// ReturnType
// ReturnType<T> 的作用是用于获取函数 T 的返回类型。

type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<<T>() => T>; // {}
type T3 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]
type T4 = ReturnType<any>; // any
type T5 = ReturnType<never>; // any
// type T6 = ReturnType<string>; // 类型“string”不满足约束“(...args: any) => any”。ts(2344)
// type T7 = ReturnType<Function>; // Error

export {}