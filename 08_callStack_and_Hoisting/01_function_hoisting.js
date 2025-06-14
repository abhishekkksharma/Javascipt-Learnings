/*hoisting:  when the function goes automatically to the top 
of its scope in order to execute the code is called hoisting.
*/
// eg


// FUNCTION HOISTING

//- this will execute 
function saymyname(name){
    console.log(name);
    
}
saymyname("Abhishek");


//- this will also be executed execute 
saymyname2("Abhishek");

function saymyname2(name){
    console.log(name);
}

// this will not work due to this type of decleration
sayhello();
let sayhello = function(){
    console.log("hello how are you");
}
// ReferenceError


