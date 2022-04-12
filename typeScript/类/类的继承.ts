 class Person {
    constructor (name: string,age: number) {
    this.name = name
    this.age = age
 }
   name: string
   age: number

   eat () {
     console.log('人类吃饭')
   }
 }

 class Student extends Person {
   constructor (name: string,age: number,num: number) {
      super(name,age)
      this.num = num
   }
  num: number
  study () {
    console.log('学习')
  }

  // 方法重写
  eat () {
    console.log('学生们在吃饭')
    super.eat()
  }
}

class Teacher extends Person{
  constructor (name: string,age: number,num: number) {
     super(name,age)
     this.num = num
  }
  num: number

  teach () {
    console.log('教学')
  }
}

const p = new Student('大白',18,66)
console.log(p.name)
p.eat()
p.study()
