// Reference type-(stored in heap memory)
//array 
//object
//functions


// let fruits = ["Apple", "Banana", "Orange"];

// fruits.push("Kiwi");

// fruits.unshift("Grapes");

// console.log(fruits);

// // Output : [ 'Grapes', 'Apple', 'Banana', 'Orange', 'Kiwi' ]

let arr = [1,2,3,4,5];
let brr = new Array("Abhishek",1,true);
brr.push("sharma");
console.log(brr);
brr.pop();
console.log(brr);

// Array operations-
/*
1.push-insert at end 
2.pop-remove last itme
3.shift-remove first element
4.unshift-add element to first index
5.slice- new part with index eg. [2,4] // 4 excluded
6.splice- content change
7.map
8.filter
9.reduce
10.sort
11.indexof
12.find
*/


// 1. push - insert at end
let arr1 = [1, 2, 3];
arr1.push(4); 
console.log("1. push:", arr1); // [1, 2, 3, 4]

// 2. pop - remove last item
let arr2 = [1, 2, 3];
arr2.pop();
console.log("2. pop:", arr2); // [1, 2]

// 3. shift - remove first element
let arr3 = [1, 2, 3];
arr3.shift();
console.log("3. shift:", arr3); // [2, 3]

// 4. unshift - add at first index
let arr4 = [2, 3];
arr4.unshift(1);
console.log("4. unshift:", arr4); // [1, 2, 3]

// 5. slice - returns a new part
let arr5 = [0, 1, 2, 3, 4, 5];
let part = arr5.slice(2, 4);
console.log("5. slice:", part); // [2, 3]

// 6. splice - content change
let arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1, 99); // remove 1 item at index 2 and insert 99
console.log("6. splice:", arr6); // [1, 2, 99, 4, 5]

// 7. map - transform
let arr7 = [1, 2, 3];
let mapped = arr7.map(x => x * 2);
console.log("7. map:", mapped); // [2, 4, 6]

// 8. filter - condition match
let arr8 = [1, 2, 3, 4];
let filtered = arr8.filter(x => x % 2 === 0);
console.log("8. filter:", filtered); // [2, 4]

// 9. reduce - single value
let arr9 = [1, 2, 3, 4];
let reduced = arr9.reduce((acc, curr) => acc + curr, 0);
console.log("9. reduce:", reduced); // 10

// 10. sort - sorting numbers
let arr10 = [3, 1, 4, 2];
arr10.sort();
console.log("10. sort:", arr10); // [1, 2, 3, 4]

// 11. indexOf - find index
let arr11 = ['a', 'b', 'c'];
console.log("11. indexOf:", arr11.indexOf('b')); // 1

// 12. find - find by condition
let arr12 = [5, 12, 8, 130, 44];
let found = arr12.find(x => x > 10);
console.log("12. find:", found); // 12
