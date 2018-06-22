// class declaration
class Dog {
    constructor(name, breed) { // the only required method
        this.name = name;
        this.breed = breed;
    } // you do need a comma ' , ' here
    greet() {
        console.log(console.log(`Hi I'm Mr.${this.name} look at me!!`));
    }
    static info() { // static methods lives inside the class and it's not inherited
        console.log(`Dogs are AWESOME!!`);
    }
    get description() {
        return `${this.name} is a ${this.breed} dog`
    }
    set dogAge(age) {
        this.age = age; // you can't use years here because it is the same as the setter name 
    }
}
// luna.description // getters are not methods, they are properties  so you don't use paranthesis ()



const luna = new Dog('luna', 'balady');
luna.greet();
// luna.info(); // Err not a function; because it's a static method
Dog.info(); // you can only access it from the parent class

function getDescription(dog) {
    console.log(dog.description);

}
getDescription(luna);
luna.age = 2;
console.log(luna.age);


class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
}










// class expression
const Cat = class {

}