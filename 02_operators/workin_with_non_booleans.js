console.log(true && true)  //t
console.log(false || false) //f
console.log(false || true) //t
console.log(false && false) //f


// non-boolean
console.log(false && 'Abhishek') //false
console.log(false || 3) // 3

console.log(false || 7 || 11 || 18) // Short ciurcuiting(the first true value will be printed-7)

console.log(true || "hello") //true

/*
// falsey

- Undefined
- null
- 0
- false
*/


/*
anything which is not falsy is treated as truthy
*/