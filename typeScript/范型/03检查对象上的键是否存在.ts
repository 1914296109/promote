// keyof 操作符是在 TypeScript 2.1 版本引入的，
// 该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。

interface Person {
  name: string;
  age: number;
  location: string;
}

type K1 = keyof Person; // "name" | "age" | "location"
type K2 = keyof Person[];  // number | "length" | "push" | "concat" | ...
type K3 = keyof { [x: string]: Person };  // string | number



enum Difficulty {
  Easy,
  Intermediate,
  Hard
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}


let tsInfo = {
  name: "Typescript",
  supersetOf: "Javascript",
  difficulty: Difficulty.Intermediate
}

let difficulty: Difficulty = getProperty(tsInfo, 'difficulty');
console.log(difficulty);
// OK

// let supersetOf: string = getProperty(tsInfo, 'superset_of'); // 类型“"superset_of"”的参数不能赋给类型“"difficulty" | "name" | "supersetOf"”的参数。

export {}