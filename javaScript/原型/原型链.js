function Person () {
    this.name = 'Lowrie'
    this.arr = []
}

var p = new Person()

function Student (hobby) {
    this.hobby = hobby
}

Student.prototype = p

// 直接赋值原型的话 后面在子类原型上加的方法会直接加到父级 不合理
// Student.prototype = Person.prototype

var stu1 = new Student('swimming')
var stu2 = new Student('swimming')

//原型链直接继承的 弊端
// 1.继承的属性看不到
// console.log(stu1); // { hobby: 'swimming' }

// 2.获取引用属性,会相互影响
// stu1.arr.push(1)
// console.log(stu1.arr);
// console.log(stu2.arr);

// 3.没法传参给name 

