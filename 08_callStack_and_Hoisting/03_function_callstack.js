function greetme(greet,name) {
    console.log("Hello",name);
    greet();
        
}
function greet() {
    console.log("greetings for the day");
}

greetme(greet,"Abhishek");
