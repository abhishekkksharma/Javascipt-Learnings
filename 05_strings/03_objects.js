let person = {
    name: "Mayank",
    age: 21,
    country: "India"
};

console.log(person.name);      // Mayank
console.log(person.age);       // 21
console.log(person.city);      // India



let person2 = {
    name: "Mayank",
    age: 21,
    country: "India"
};

// Adding a property
person2.isSleeping = false;

// Modifying a property
person2.age = 22;

// Deleting a property
delete person2.country;

console.log(person2);

// Output : { name: 'Mayank', age: 22, isSleeping: false }