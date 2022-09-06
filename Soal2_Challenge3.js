//challenge chapter 3 soal 2

class Animal {
  constructor(name, age, status, legs, species) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    // return `Hello, my Name ${this.name}, and I am ${this.age}, my Legs ${this.legs}, My Species ${this.species}, my status ${this.status}.`;
    return `Nama ${this.name}, Umur ${this.age}, Kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 0;
    this.species = "Shark";
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
    this.legs = 4;
    this.species = "Cat";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status, master);
    this.legs = 4;
    this.species = "Dog";
    this.master = "Master si Anjing Tampan dan Pemberani";
  }
  GreetMaster() {
    return `Nama ${this.name}, Umur ${this.age}, Kaki ${this.legs}, Spesies ${this.species}, Status ${this.status}, Hello ${this.master}`;
  }
}

const shark = new Shark("Hiu", 12, "Berenang di Laut");
const cat = new Cat("Kucing", 6, "Rebahan");
const dog = new Dog("Anjing", 10, "Jaga Toko");
console.log(shark.introduce()); // output => Nama Hiu, Umur 5, Kaki 0, Spesies Shark, Status Berenang di Laut.
console.log(cat.introduce()); // output => Nama Kucing, Umur 2, Kaki 4, Spesies Cat, Rebahan.
console.log(dog.GreetMaster()); // output => Nama Anjing, Umur 3, Kaki 4, Spesies Dog, Status Jaga Toko, Hello Master si Anjing Tampan dan Pemberani
