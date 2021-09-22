/*
Arrow Functions
*/

//Normal function declaration
function coffee(){
    return 'coffee is good';
}

//Normal function expression
let tea = function(){
    return 'tea is delicious';
}

console.log((coffee));
console.log((tea));

//Arrow functions are *always* anonymous
//Arrow function expression:
    let hotChocolate = () => {
        return 'hot chocolate is awesome!';
    }

console.log(hotChocolate());

let animals = (kittens, puppies) => {return `I have ${kittens} cat(s) and ${puppies} dog(s)`};

console.log(animals(3,2))
console.log(animals(0,0));

//Concise vs. block body
//Concise body:
    let apples = x => `There are ${x} apples`;
    console.log(apples(10));

//Block body:
    let bananas = (x) => {
        return `There are ${x} bananas`;    
    }
    console.log(bananas(5));

//Return must be explicitly written in a block-body arrow function

let func = () => 'hi';

console.log(func());

let secondFunc = ()
=>
'hi';
console.log(secondFunc());