// Exclude
// Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number  