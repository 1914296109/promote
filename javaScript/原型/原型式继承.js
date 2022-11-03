// 把一个对象 当作另一个对象的原型

var  obj = {
  name: 'Lowrie'
}

function creatObject1 (o) {
  function Fn () {} 
  Fn.prototype = o
  return new Fn()
}

function creatObject2 (o) {
  var newobj = {} 
  Object.setPrototypeOf(newobj,o)
  return newobj
}


var info = Object.create(obj)

var newObject =  creatObject2(obj)

console.log(newObject.__proto__);
console.log(info.__proto__);