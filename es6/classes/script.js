// class declaration
class Dog{
    constructor(name, breed) { // the only required method
        this.name = name;
        this.breed = breed;
    } // you do need a comma ' , ' here
    greet() {
        return console.log(console.log(`Hi I'm Mr.${this.name} look at me!!`));
    }
    static info() { // static methods lives inside the class and it's not inherited
        console.log(`Dogs are AWESOME!!`);
    }
    get description() {
        return `${this.name} is a ${this.breed} dog`
    }
    set dogAge(age) {
        this.age = age; 
    }
}
// luna.description // getters and setters are not methods, they are properties  so you don't use parentheses ()



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
luna.dogAge = 5;
console.log(luna.age);



class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100;
        this.belly = [];
    }
    drink(){
        this.thirst -=10;
        return `blup! thirst  =  ${this.thirst}`
    }
    eat(food) {
        this.belly.push(food);
        return `Yummy! I ate ${food}, now my belly is full with ${this.belly}`
    }
}

const cow = new Animal('bagara');

// class expression
const Cat = class extends Animal{ //okay so now we are extending the Animal and making a new specie.. first of all we use the keyword extend
    constructor(name,breed,age) { // then we use the constructor as any regular class
        super(name); // now here's smth new, we should use the super() method and pass the parent class arguments in it, and it should be used b4 the this keyword
        this.breed = breed;
        this.age = age;
    }
    burr() {
        console.log('burrrr!');
        
    }

}
const mu = new Cat('Mu','Himalayan',5);
mu.eat('Dry food')
mu.burr();