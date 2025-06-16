// Spread cloning:

// let src = {
//     age: 12,
//     wt: 20,
//     ht: 170,
// };
// let dest = {...src}; // src is cloned in dest.
// src.age = 90;
// console.log("src: ",src);
// console.log("dest: ",dest);


// Assign cloning

// let src2 = {
//     age: 12,
//     wt: 20,
//     ht: 170,
// };

// let dest2 = Object.assign({},src2); // src2 is copied 

// console.log("src: ",src2);
// console.log("dest: ",dest2);

// Iterration method 

let src3 = {
    age: 12,
    wt: 20,
    ht: 170,
};

let dest3 = {};
for(let key in src3){
    let neKey = key;
    let newValue = src3[key];
    // insert neKeyy and value in dest and create a clone
    dest3[neKey] = newValue;
}
src3.wt=120;
console.log(src3);

console.log(dest3);


