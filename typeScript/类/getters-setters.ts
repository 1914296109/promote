class Person {
  private _name: string
  constructor (name: string) {
    this._name = name
  }

  set name (newName) {
    this._name = newName
  }

  get name () {
    return this._name
  }
}

const p = new Person('dabai')

// console.log(p._name)
// p._name = 'mao'
p.name = 'mao'
console.log(p.name)




export {}