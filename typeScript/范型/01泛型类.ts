interface GenericInterface<U> {
  value: U;
  getIdentity: () => U;
}

class IdentityClass<T> implements GenericInterface<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getIdentity(): T {
    return this.value;
  }
}

const myNumberClass = new IdentityClass<Number>(68);
console.log(myNumberClass.getIdentity()); // 68

const myStringClass = new IdentityClass<string>("Semlinker!");
console.log(myStringClass.getIdentity()); // Semlinker!
