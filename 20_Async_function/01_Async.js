
// async function getdata() {

//     setTimeout(function() {
//         console.log("I am inside set Timeout")
//     },3000);
// } 

// let output = getdata();

// // Await- ?
// //fetch API 

// async function getdata(){

//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    
//     //parse json - async 
//     let data = await response.json();

//     console.log(data);
// }
// getdata();
// Scenerio:
// prepare url // api endpoint  -> sunc
// await // fetch data - network call -> async
// process data -> sync

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
  method: "POST",
  body: JSON.stringify({ username: "Abhishek Sharma" }),
  headers: myHeaders,
}
async function getdata(){
    const response = await fetch(url);
    let data = await response.json();
    console.log("Get data response: " , data);
}
async function PostData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("Post data response: " , data);
     
}

async function processData() {
    await PostData();
    await getdata();
}
// PostData();
// getdata();