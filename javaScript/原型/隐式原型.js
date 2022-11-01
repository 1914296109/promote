var obj = {
    name: 'Lowrie'
}

// => {name: 'Lowrie', __proto__:{}} 隐式原型
console.log(obj.__proto__)  // (是由浏览器提供的)
console.log(Object.getPrototypeOf(obj)); // ES5之后提供的方法
obj.__proto__.age = 18

// 如果在对象中没找到,就会去原型里面找,找不到才会 打印 undefinded
console.log(obj.age);