// Global scope - throughout the program
var age = 15;
//same will be working:
// let age = 15;
// const age = 15;

console.log(age);

{
console.log(age)
}

if(true){

    console.log(age)

}

for(let i=0; i<2; i++) {
    console.log(age);
}

function sayHello() {
    console.log("Hi",age);
}
sayHello();