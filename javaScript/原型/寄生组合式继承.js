// 核心继承函数

function creatObejct (o) {
    function Fn () {}
    Fn.prototype = o
    return new Fn()
}

function inheritPrototype (SubType,SuperType) {
    SubType.prototype = creatObejct(SuperType.prototype)
    Object.defineProperty(SubType.prototype,'constructor', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: SubType
    })
}

// 1. 父
function Person (name,age) {
    this.name = name
    this.age = age
}
Person.prototype.eat = function () {
    console.log('吃饭');
}

// var p = new Person()
// Student.prototype = p
// Student.prototype.constructor = Student

inheritPrototype(Student,Person)

// 子
function Student (name,age,hobby) {
    Person.apply(this,[name,age])
    this.hobby = hobby
}

Student.prototype.study = function () {
    console.log('学习');
}

var stu = new Student('Lowrie',18,'swimming')

console.log(stu);
console.log(stu.__proto__);
