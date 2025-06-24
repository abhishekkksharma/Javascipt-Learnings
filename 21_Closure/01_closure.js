//######## Understanding scope #####
// let name = "Manish" // accesible in whole code however 
// // the innerFuntion prints the closest value

// function outerFunction() {
//     {
//         let name = "Shushant";
//     }
//   let name = "Abhishek"; // let  .> block scope
//   function innerFuntion() {
//     let name = "Sharma" 
//     console.log(name); 
//   }
//   innerFuntion();
// }
// outerFunction();



function outerFunction() {
  let name = "Abhishek"; 
  function innerFuntion() {
    console.log(name); // In a nested funtion the inner 
    // function is bind with the outer function 
    // e.g let name is bind with innerFunction 
  }
  return innerFuntion;
}

let inner = outerFunction();
inner(); // Output: Abhishek