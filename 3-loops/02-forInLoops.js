/*
FOR IN LOOPS
*/

//Does not require that the thing you loop through to be numbered.

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item);
    console.log([item]);
}

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];

for(cat in catArray){
    console.log(cat);
    console.log(catArray[cat]);
}

// Let's write a for-in loop that capitalizes the first letter of a name

let instructor = 'yAsmeeN'
let capName;

for (n in instructor){
    if(n == 0){
        capName = instructor[n].toUpperCase();
    } else {
        capName += instructor[n].toLowerCase();
    }
}
console.log(capName);