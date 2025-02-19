class Animal {
  constructor(name = "") {
    this.name = name;
  }

  eat() {
    return `${this.name} eats`;
  }
}

class Dog extends Animal {
  constructor(name = "Rax") {
    super(name);
  }

  sound() {
    return "Bark";
  }
}

class Cat extends Animal {
  constructor(name = "Stormy") {
    super(name);
  }

  sound() {
    return "Meow";
  }
}

class Home {
  constructor() {
    this.adoptedPets = [];
    this.sounds = [];
  }

  adoptPet(pet) {
    if (this.adoptedPets.indexOf(pet) === -1) {
      this.adoptedPets.push(pet);
      this.sounds.push(pet.sound());
      return this.adoptedPets.length;
    } else {
      return `error message: You cannot adopt ${Animal.name} twice`;
    }
  }

  makeAllSounds() {
    return this.sounds;
  }
}

console.log("------------------------1--------------------------------");
let dog1 = new Dog();
let dog2 = new Dog("Simba");

console.log(dog1.eat()); // returns 'Rax eats'
console.log(dog1.sound()); // returns 'Bark'

console.log(dog2.eat()); // returns 'Simba eats'
console.log(dog2.sound()); // returns 'Bark'

let cat1 = new Cat();
let cat2 = new Cat("Smokey");

console.log(cat1.eat()); // returns 'Stormy eats'
console.log(cat1.sound()); // returns 'Meow'

console.log(cat2.eat()); // returns 'Smokey eats'
console.log(cat2.sound()); // returns 'Meow'
console.log("//////////////////////jj/////////////////////////////////");
let home = new Home();
//let dog1 = new Dog();
//let dog2 = new Dog();
let cat = new Cat();

console.log(home.makeAllSounds()); // this returns an empty array
console.log(home.adoptPet(dog1)); // 1
console.log(home.makeAllSounds());
// this returns:
// ["Bark"]

console.log(home.adoptPet(cat)); // 2
console.log(home.makeAllSounds());
// this returns:
// ["Bark", "Meow"]

console.log(home.adoptPet(dog2)); // 3
console.log("lllllllllllllllllllllllllllllllllll");
console.log(home.adoptPet(dog2));
console.log(home.makeAllSounds());
// this returns:
// ["Bark", "Meow", "Bark"]
