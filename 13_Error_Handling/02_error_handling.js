// try - catch - final

// try {
    
// } catch (error) {
    
// }
// finally{

// }


// try {
//     console.log("try block starts here");
//     console.log(x);

//     console.log("try block ends here");
        
// }

// catch (error) {
//     // define krte hai, error ke sath kya krna hai\
//     //retry logic
//     //fallback mechanism
//     //logging
//     //custom error
//     console.log("I AM INSIDE CATCH BLOCK");
//     console.log("your error is here:",error);   
// }

// finally{
//     console.log("I will run everytime,as i am finally block");
    
// }


// // custom error:
// try{
//     //refernce error
//     console.log(x);
    
// }
// catch(err){
//     throw new Error ("Bhai pehle declare kro fir print krna")
// }

let errorcode =100;

if(errorcode==100){
    throw new Error("Invalid Json");
}