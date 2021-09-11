/*
FOR OF LOOPS
*/

// Great for iterating over values in an object
// Iteration requires numbered 'things' to work through

//of requires that your 'thing' you're looping through be iterable -- that means it needs to be numbered.
let student = {name: 'Peter', isAwesome: true, degree: 'Javascript', week: 1};

for (item of student){
    console.log(item);
} //->does not work

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for (cat of catArray){
    console.log(cat, 'says meow');
}