interface A<T=string> {
  name: T
}

const str1:A = {name: '1231'}
const str2:A<number> = {name: 1231}

export {}