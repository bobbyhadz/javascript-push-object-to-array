// EXAMPLE 1 - Push an Object to an Array in JavaScript

const arr = [];

const obj = {name: 'Tom'};

arr.push(obj);

console.log(arr); // 👉️ [{name: 'Tom'}]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Adding the object to the array upon declaration

// const obj1 = {name: 'Tom'};
// const obj2 = {name: 'Alice'};

// const arr = [obj1];
// console.log(arr); // [ { name: 'Tom' } ]

// const arr2 = [obj1, obj2];
// console.log(arr2); // [ { name: 'Tom' }, { name: 'Alice' } ]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Pushing multiple objects to an array with Array.push()

// const arr = [];

// const obj1 = {name: 'Alice'};
// const obj2 = {name: 'Bob'};
// const obj3 = {name: 'Carl'};

// arr.push(obj1, obj2, obj3);

// // 👇️ [{name: 'Alice'}, {name: 'Bob'}, {name: 'Carl'}]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Pushing an object to the beginning of an array with unshift()

// const arr = [{id: 2, name: 'Bobby'}];

// const obj = {id: 1, name: 'Alice'};

// arr.unshift(obj);

// // 👇️ [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bobby' } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Pushing multiple objects to the beginning of an array

// const arr = [{id: 3, name: 'Carl'}];

// const obj1 = {id: 1, name: 'Alice'};
// const obj2 = {id: 2, name: 'Bobby'};

// arr.unshift(obj1, obj2);

// // [
// //   { id: 1, name: 'Alice' },
// //   { id: 2, name: 'Bobby' },
// //   { id: 3, name: 'Carl' }
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Push an Object into an Array using spread syntax

// let arr = [{id: 1, name: 'Alice'}];

// const obj = {id: 2, name: 'Bobby'};

// arr = [...arr, obj];

// // 👇️ [ { id: 1, name: 'Alice' }, { id: 2, name: 'Bobby' } ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 7 - Pushing an Object to an Array using Array.splice()

// const arr = [
//   {id: 1, name: 'Alice'},
//   {id: 3, name: 'Carl'},
// ];

// const obj2 = {id: 2, name: 'Bobby'};

// arr.splice(1, 0, obj2);

// // [
// //   { id: 1, name: 'Alice' },
// //   { id: 2, name: 'Bobby' },
// //   { id: 3, name: 'Carl' }
// // ]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 8 - Pushing an object to an array using `Array.concat`

// const arr = [];

// const obj1 = {name: 'Tom'};
// const obj2 = {name: 'Alice'};

// const arr2 = arr.concat(obj1, obj2);

// console.log(arr2); // 👉️ [ { name: 'Tom' }, { name: 'Alice' } ]
