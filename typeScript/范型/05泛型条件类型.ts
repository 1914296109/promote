interface Dictionary<T = any> {
  [key: string]: T;
}

type StrDict = Dictionary<string>;

type DictMember<T> = T extends Dictionary<infer V> ? V : never;
type StrDictMember = DictMember<StrDict>; // string

// 利用条件类型和 infer 关键字，我们还可以方便地实现获取 Promise 对象的返回值类型
async function stringPromise() {
  return "Hello, Semlinker!";
}

interface Person {
  name: string;
  age: number;
}

async function personPromise() {
  return { name: "Semlinker", age: 30 } as Person;
}

type PromiseType<T> = (args: any[]) => Promise<T>;
type UnPromisify<T> = T extends PromiseType<infer U> ? U : never;

type extractStringPromise = UnPromisify<typeof stringPromise>; // string
type extractPersonPromise = UnPromisify<typeof personPromise>; // Person


export {}