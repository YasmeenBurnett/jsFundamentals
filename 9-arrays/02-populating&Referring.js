/*
ARRAYS
*/

//What is an array?
    // has [] brackets
    // can hold multiple datatypes
    // can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Reece','Joe', 23, false, ['Ryan', 'Victoria']];
// Hidden keys:   0          1         2      3    4     5       6
// console.log(typeof students); // typeof doesn't tell that the variable is an array -> object
// console.log(students instanceof array); // instanceof tells that my array is an array
// console.log(students[2]);
// console.log(students[1]);
// console.log(students[6]);

let oneName = students[6][1];
console.log(`Hello ${oneName} you look nice today.`);

// Recall for-of loop -> gives the values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesdilla', 'Cheesecake', 'Hotdog'];

// for (f of food){
//     console.log(f+'is amazing!'); // string inconcatenation
// }

// // Array Methods
// food.push('Pizza'); // added to the end of our array
// console.log(food);
// food.splice(1, 1, 'Bananas');
// console.log(food);
// food.splice(2, 0, 'Sweet Potato Pie'); // asks for an insertion point, how many things to remove, then the item or items to add
// console.log(food);
// food.pop(); // removes the last element of an array
// console.log(food);

// food = food.slice(2,5); // the first number is the first element to slice from the array, while the second number is the stop position (not to be included)
// console.log(food);

// forEach allows to iterate with loops specifically, and we can directly grab both the elements and their index numbers.

// food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'Snow White', 'The Phantom Menace', 'Watchmen', 'The Sound of Music'];

movies.push('The Force Awakens');
movies.splice(3, 1, 'The League of Extraordinary Gentlemen');

movies.forEach(movie => console.log(movie));
console.log(movies.length);

// Let's do the following with an array:
//  - check if we are working with an array
//  - flip the values within the array (what was in index 4 is now in 0, 3 to 1, etc.)
//  - using a method only, print the values of the newly arranged array

let arr = new Array(1, 2, 3, 4, 5);

if (arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}