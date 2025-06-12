// String concatenation : 

let op1 = "English ";

let op2 = "HINDI";
// console.log(op2.length);



//conversion of lowwercase and uppercase:

let op3 = op1+op2;

// console.log(op1.toUpperCase());
// console.log(op2.toLowerCase())


// how to add strings in a sentence:

// let final_ans = ` ${op1} and ${op2}`;
// console.log(final_ans)



// string printing by indexing:
let str = "Abhishek";
// console.log(str.substring(2,4)); // index 4 is excluded 



//string split and joining:
let sentence = "Hello \\how \\are \\you";

let words = sentence.split('\\'); // the next charcter from \ is treated as normal character not special

console.log(words)

console.log(words.join(','));

