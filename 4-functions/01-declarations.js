/*
Functions
*/

//Genteral Ideas: at their broadest level, functions do the following:
// 1. Take some input which the function will handle/process
// 2. They process the input given to them
// 3. They usually, but now always, return some value
// 4. They can be invoked (used) as many times as we want, cutting down on code repetition.

// Example one:
function newFunc(num){
    return num + 1;
}

console.log (newFunc(7));
console.log (newFunc(10));
console.log (newFunc(11));
console.log (newFunc(-2));

//Example two:

function sentence(firstName, lastName){
    return `My first name is ${firstName} and my last name is ${lastName}`;
}

console.log(sentence('Yasmeen', 'Burnett'));
console.log(sentence('Camille', 'Barrios'));
let superImportantSentence = sentence('Amelia', 'Medina');
console.log(superImportantSentence);

//A function that takes a complex type - (an array), and console.logs each item in the input array

let arr = [1, true, {key: 'string'}, [10, false, null], 'hey!'];
let arr2 = [5, 6, 7, 8, 9, 10, 10];

function iteratorFunc(inputArr){
    for (let element of inputArr){
        console.log(element);
    }
}
iteratorFunc(arr);
iteratorFunc(arr2);