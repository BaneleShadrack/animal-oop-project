const { Dog, Cat, Home } = require("./animals");

const home = new Home();
const dog1 = new Dog("Buddy");
const cat1 = new Cat("Whiskers");

console.log(home.adoptPet(dog1)); // 1
console.log(home.makeAllSounds()); // ["Bark"]

console.log(home.adoptPet(cat1)); // 2
console.log(home.makeAllSounds()); // ["Bark", "Meow"]

try {
    home.adoptPet(dog1);
} catch (error) {
    console.error(error.message); // "Buddy has already been adopted!"
}
