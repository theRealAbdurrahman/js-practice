function* listPeople() {
    yield 'bedo';
    yield 'yara';
    yield 'noran'
}
// a function keyword followed by an asterisk is a generator.
// a generator is basically a function that can stop midway and then continue from where it stopped.
// it appears to be a function but it behaves like an iterator that stops and continues when you call .next()

const people = listPeople() // to use a generator you invoke the generator function and store it in a variable 

console.log(people); // >> listPeople {<suspended>} .. the output is a suspended generator 


// to iterate or get the value ot let the generator continue or whatever it should be named you call the next method on the variable 
people.next() // >> {value: "bedo", done: false}
people.next() // >> {value: "yara", done: false}
people.next() // >> {value: "noran", done: false}
people.next() // >> {value: "undefined", done: true}

// ofc you can call
people.next().value // to get the value without the object and its details 

//NOTE: if you call listPeople().next()  the generator won't advance to the next iteration, and it will yield the same value over and over


//the prev yielded values were hard coded, but ofc they can be dynamically generated

function* listNumbers() {
    let i = 0;
    yield i;
    i++;
    yield i;
    i++
    yield i;
}

const numbers = listNumbers()

// Another example: iterate over an array, but instead of logging its values we will use a generator and call .next()

const inventorsList = [{ // I don't usually write this way but I'm using an auto formatter XD 
        first: 'Albert',
        last: 'Einstein',
        year: 1879
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571
    },
    {
        first: 'Nicolas',
        last: 'Copernicus',
        year: 1473
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858
    },
];

function* iterate(list) {
    for (const item of list) {
        yield item;
    }
}

const inventors = iterate(inventorsList)
inventors.next().value


// Using generators to make waterfall like ajax requests

function ajax(url) {
    fetch(url)
        .then(data => data.json())
        .then(data => dataGen.next(data)) // whatever we pass in next will be stored on the variable which stores the result from the yield
        .catch(err => console.log(err))
}

function* waterfallAJAX() {
    console.log('fetching post');
    const post = yield ajax('https://jsonplaceholder.typicode.com/posts/1');
    console.log(post);

    console.log('getting user');
    const user = yield ajax('https://jsonplaceholder.typicode.com/users/1');
    console.log(user);

    console.log('getting todo');
    const todos = yield ajax('https://jsonplaceholder.typicode.com/todos/1');
    console.log(todos);
}

const dataGen = waterfallAJAX();
dataGen.next(); // to start the generator 


// cool use case 

/* 
function* waterfallAJAX() {
    const post = yield ajax('https://jsonplaceholder.typicode.com/posts/');

    const user = yield ajax('https://jsonplaceholder.typicode.com/users/' + post[0]); // ajax request will fire when i yield the prev wanted value from the other request.

    const todos = yield ajax('https://jsonplaceholder.typicode.com/todos/1');
}
*/

// using for of loop 

function* lyrics() {
    yield 'wake me up';
    yield 'wake me up inside';
    yield "i can't wake up";
    yield 'wake me up inside';
    yield 'save meeeee';
}
const lyric = lyrics();

for (const line of lyric) { //for of loop is awesome because it can iterate over any type of iterables  except objects
    console.log(line);
}