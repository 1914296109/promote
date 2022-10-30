function chenfa (a) {
 return a * 2
}

function pingfang (b) {
  return b ** 2
}

function change (...fns) {
  // 如果参数有非函数就报错
  const length = fns.length

  for(i = 0;i<length;i++){
    if (typeof fns[i] !== 'function' ) {
      throw Error('参数错误,请传入函数')
    }
  }
  return function second (...args) {
    let index = 0
    let result = length ? fns[index](args) : args
  
    while(++index < length) {
      result = fns[index](result)
    }
    return result
  }

}

const newFn = change(chenfa,pingfang)

// function zuhe (val) {
//  return pingfang(chenfa(val))
// }
// console.log(zuhe(10));

console.log(newFn(2));


