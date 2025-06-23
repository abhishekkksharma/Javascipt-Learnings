
// async function getdata() {

//     setTimeout(function() {
//         console.log("I am inside set Timeout")
//     },3000);
// } 

// let output = getdata();

// // Await- ?
// //fetch API 

async function getdata(){

    // get request - async
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    
    //parse json - async 
    let data = await response.json();

    console.log(data);
}
getdata();
// Scenerio:
// prepare url // api endpoint  -> sunc
// await // fetch data - network call -> async
// process data -> sync