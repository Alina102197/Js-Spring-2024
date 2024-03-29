// Creating an object
let person = {
    name : 'John',
    age : 30,
    isMarried : false,
    sayHello : function() {
        // when function property is called, it will execute the code below:
        console.log('Hello');
    }

};
//Access nam eproperty using dot notation
// console.log(person.name);
// console.log(person['name']);

//Access function from an object:
// person.sayHello();

//Access nested object:
// console.log(person.address.newObj.foo);
// console.log(person['address']['city']);

//Adding new Properties to an object:
// console.log(person);
person.address = {
    street : '123 Dime Street',
    city: 'Any city',
    state : 'NY',
    zip : '12345',
}
// person.dob = '01/01/1990'
// console.log(person);
// //Update a property:
// person.age = person.age + 1;
// console.log(person.age);

//Delete a property:
// delete person.address;
// console.log(person);

//Iterate over object properties:
//(In this case the code is not going to acees the second object called "address" located in the object "person")
// for(let key in person) {
//     console.log(`${key} : ${person[key]}`)
// }
// // In order to access the second object, we have to create a loop:
// for(let key in person) {
//     console.log(`${key} : ${person[key]}`);
//     if(typeof person[key] === 'object') {
//         for(nestedKey in person[key]) {
//             console.log(`${nestedKey} : ${person[key][nestedKey]}`);
//         }
//     } 
// }

//Build car object:
let car = {
    make : 'Honda',
    model : 'Accord',
    color : 'White',
    year : '2023',
    brake : function() {
        console.log('Brake pressed')
    },
    accelerate : function() {
        console.log('Accelerate pressed')
    },
    turn : function() {
        console.log('turn is made')
    }
}; console.log(car);
// console.log(car.make);
// console.log(car.accelerate());
// console.log(car.turn());  //It shoes undefined in the terminal!!!!!