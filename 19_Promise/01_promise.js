// let firstpromise = new Promise( (resolve,reject ) => {
//     console.log("Abhishek");
//     reject(new Error("Internal error"));
// })

/*Promise {<rejected>: Error: Internal error
    at http://127.0.0.1:5500/19_Promise/01_promise.js:3:12
    at new Promise…}[[Prototype]]: Promise[[PromiseState]]: "rejected"[[PromiseResult]]: Error: Internal error
    at http://127.0.0.1:5500/19_Promise/01_promise.js:3:12
    at new Promise (<anonymous>)
    at http://127.0.0.1:5500/19_Promise/01_promise.js:1:20 */


// let firstpromise = new Promise( (resolve,reject ) => {
//     console.log("Abhishek");
//     resolve(1001);
// })


/// Output:
/*
Promise {<fulfilled>: 1001}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
1001 */


// let promise = new Promise((resolve , reject) => {
//     setTimeout(function saymyname() {
//     console.log("My name is Abhishek");
//     },15000);
//     resolve(1);
// } );


// let promise1 = new Promise((resolve , reject) => {
//     let success = true; //The message is Promise fullfilled
//     // let success = false; //Erroe: Promise rejected
//     if(success){
//         resolve("Promise fullfilled");
//     }
//     else{
//         reject("Promise rejected");
//     }
// } );

// promise1.then((message) =>{
//     console.log("The message is "+ message);
    
// }).catch((error) => {
//     console.log("Erroe: "+ error);
    
// })

// you can also use multiple then messages on the same promise 
// -promise chaning / chaning promise

// promise1.then((message) =>{
//     console.log("First msg: "+ message);
//     return "Promise fillfiled second message"; //this is now message for second then.
    
// }).then((message) => {
//     console.log("Second msg:"+ message);
//     return "Promise fillfiled third message";
    
// }).then((message) => {
//     console.log("Third msg:"+ message)
// }).finally((message) =>{
//     console.log("final message");    
// })
// you can also add multiple catch.


let promise1 = new Promise((resolve,reject) => {
    setTimeout(resolve,1000, "First");
})
let promise2 = new Promise((resolve,reject) => {
    setTimeout(resolve,2000, "Second");
})
let promise3 = new Promise((resolve,reject) => {
    setTimeout(reject,4000, "Third");
})

Promise.all([promise1,promise2,promise3])
.then((values) => {
    console.log(values);   
})
.catch((error) => {
    console.log("Error:"+error);
})
