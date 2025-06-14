let arr = [1,2,3,4,5];
let ans = arr.forEach((value,index) =>{
    console.log("Value:",value, "Index:",index);
    
})


let obj = {
    name: "Abhishek",
    age: 20,
    weight: 70,
    height: "6ft",
    
}

//for-in
for(let key in obj){
    console.log(key," ",obj[key]);
}

//for-off
let arr2 = [10,20,30,40];
for(let value of arr2){
    console.log(value);    
}

let name = "Abhishek";
for(val of name){
    console.log(val)
}