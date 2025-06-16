function saymynme(firstname =  "Abhishek",latname = "Sharma") {
    console.log("My name is:",firstname,latname);
        
}
saymynme(); // by default it will print: My name is: Abhishek Sharma

function saymynme2(firstname2 = "Abhishek",latname2 = firstname2.toUpperCase()) {
    console.log("My name is:",firstname2,latname2);
        
}
saymynme2(); // by default it will print: My name is: Abhishek ABHISHEK


// setting object default value in function
// simillarly arrays can also be passed as default parameter
function solve(value = {age:25,wt:56,ht:190}) {
    console.log("hello",value);
    
}
solve();


// functiona parameter in default value
function getage() {
    return 190;
}
function utility(name = "Abhishek",age = getage()) {
    console.log(name," ",age );  
}

utility();