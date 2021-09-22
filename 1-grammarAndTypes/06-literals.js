/*
Literals
*/

let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
//                 0          1           2           3          4
console.log(weekDays.toString());
console.log(weekDays[3]);

let soup = {
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barely'
}
console.log(soup.c);

//array and object literals can hold primitive and 'complex types (arrays, object, functions)
let complexArrLiteral= [1, true, 'Academy', [1,2,3], {key: 'test'}, function(){return 'yes'}]; // number, boolean, string, arrary, object, function
console.log(complexArrLiteral[5]);
console.log(complexArrLiteral[3]);

let complexObjLiteral = {num: 1, boolean: false, string: 'School', arr: [10,9,8],
obj: {key: 'test'}, func: function(){return 'no'}};

console.log(complexObjLiteral.func);
console.log(complexObjLiteral.arr);