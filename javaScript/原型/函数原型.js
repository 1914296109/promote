function Person () {

}


p1 = new Person()
p2 = new Person()

console.log(p1.__proto__ === Person.prototype);
console.log(p2.__proto__ === Person.prototype);
 
Person.prototype.name = 'Lowrie'

console.log(p1.name);``