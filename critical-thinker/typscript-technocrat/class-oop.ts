class Animal {
  constructor(public name: string, public species: string) {
    this.name = name;
    this.species = species;
  }
}

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }
}
