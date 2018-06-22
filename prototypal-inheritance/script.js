// constructor function 
function Dog(name, breed, age = 1) { //default argument
    this.name = name;
    this.breed = breed;
    this.age = age;
}
const luna = new Dog('luna', 'balady', 3);
console.log(luna);

Dog.prototype.greet = function () {
    console.log(`Hi I'm Mr.${this.name} look at me!!`);
}
luna.greet();

const fang = new Dog('fang', 'Neapolitan Mastiff', 7);
fang.greet()

Dog.prototype.greet = function () { // run it in the console and you'll find that it've overidden the old method 
    console.log(`nah!`);
}

fang.greet()

Dog.prototype.cuddle = function () {
    console.log(`I love you owner!! <3`);
}

luna.cuddle()