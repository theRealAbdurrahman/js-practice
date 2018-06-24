
function* listPeople(params) {
    yield 'bedo';
    yield 'yara';
    yield 'noran'
}
// a function keyword followed by an asterisk is a generator.
// a generator is basically a function that can stop midway and then continue from where it stopped.
// it appears to be a function byt it behaves like an iterator that stops and continues when you call .next()

const people = listPeople() // to use a generator you invoke the generator function and store it in a variable 

console.log(people); // >> listPeople {<suspended>} .. the output is a suspended generator 


// to iterate or get the value ot let the generator continue or whatever it should be named you call the next method on the variable 
people.next() // >> {value: "bedo", done: false}
people.next() // >> {value: "yara", done: false}
people.next() // >> {value: "noran", done: false}
people.next() // >> {value: "undefined", done: true}